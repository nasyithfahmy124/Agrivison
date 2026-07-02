from django.shortcuts import get_object_or_404,render
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import RiwayatDeteksi
from .serializers import PlantImageSerializer, RiwayatDeteksiListSerializer
from .disease_data import get_disease_info
from rest_framework.permissions import IsAuthenticated
from django.apps import apps
import io
import logging
import numpy as np
from PIL import Image, ImageOps
logger = logging.getLogger(__name__)

IMAGE_SIZE = (224, 224)
def _get_model_and_classes():
    
    config = apps.get_app_config("ai_servis")
    if config.model is None:
        raise RuntimeError(
            "Model belum ditraining "
            "ai_servis ml_models dan tidak ada error saat server startup."
        )
    return config.model, config.class_names


def proses_image(image_file) -> np.ndarray:
    image_file.seek(0)
    image_bytes = image_file.read()
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    image = ImageOps.fit(image, IMAGE_SIZE, Image.Resampling.LANCZOS)
    image_array = np.asarray(image, dtype=np.float32)
    normalized = (image_array / 127.5) - 1  
    image_file.seek(0)
    
    return np.expand_dims(normalized, axis=0)

class DiseaseDetectionView(APIView):
    name = "Deteksi Penyakit"
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = PlantImageSerializer
    permission_classes = [IsAuthenticated] # <-- Menjamin hanya user yang sudah login yang bisa akses

    def post(self, request, *args, **kwargs):
        serializer = PlantImageSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(
                {
                    "status": "error",
                    "message": "Input tidak valid.",
                    "errors": serializer.errors,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
            
        image_file = serializer.validated_data["image"]
        
        # 1. Memuat Model ML
        try:
            model, class_names = _get_model_and_classes()
        except RuntimeError as e:
            logger.error(str(e))
            return Response(
                {"status": "error", "message": str(e)},
                status=status.HTTP_503_SERVICE_UNAVAILABLE,
            )
            
        # 2. Memproses Gambar
        try:
            input_data = proses_image(image_file)
        except Exception as e:
            logger.warning(f"Gagal memproses gambar: {e}")
            return Response(
                {
                    "status": "error",
                    "message": "Gagal memproses gambar. Pastikan file adalah gambar yang valid.",
                },
                status=status.HTTP_422_UNPROCESSABLE_ENTITY,
            )
        try:
            prediction = model.predict(input_data, verbose=0)
        except Exception as e:
            logger.exception(f"Error saat prediksi: {e}")
            return Response(
                {"status": "error", "message": "Terjadi kesalahan saat menjalankan prediksi."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
            
        index = int(np.argmax(prediction[0]))
        confidence_score = float(prediction[0][index])
        
        if index >= len(class_names):
            logger.error(f"Index prediksi ({index}) melebihi jumlah kelas ({len(class_names)})")
            return Response(
                {"status": "error", "message": "Hasil prediksi tidak valid."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
            
        predicted_class = class_names[index]
        if "bukan tanaman" in predicted_class.lower():
            return Response(
                {
                    "status": "error",
                    "message": "Objek yang Anda unggah bukan tanaman atau tidak dikenali.",
                    "data": {
                        "predicted_class": predicted_class,
                        "confidence_score": round(confidence_score, 4)
                    }
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        
        
        try:
            riwayat = RiwayatDeteksi.objects.create(
                user=request.user,  
                image=image_file,
                disease_name=predicted_class,
                confidence_score=confidence_score
            )
        except Exception as e:
            logger.exception(f"Error menyimpan riwayat: {e}")
            return Response(
                {"status": "error", "message": "Gagal menyimpan riwayat deteksi ke database."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
            
        disease_details = get_disease_info(predicted_class)
        return Response(
            {
                "status": "success",
                "data": {
                    "history_id": riwayat.id,
                    "predicted_class": predicted_class,
                    "confidence_score": round(confidence_score, 4),
                    "disease_details": {
                        "name": disease_details["name"],
                        "description": disease_details["description"],
                        "treatment": disease_details["treatment"],
                    },
                },
            },
            status=status.HTTP_201_CREATED 
        )

class HistoryListView(APIView):#
    permission_classes = [IsAuthenticated] 

    def get(self, request, *args, **kwargs):
        riwayat = RiwayatDeteksi.objects.filter(user=request.user) 
        serializer = RiwayatDeteksiListSerializer(riwayat, many=True, context={'request': request})
        return Response(
            {
                "status": "success",
                "data": serializer.data
            },
            status=status.HTTP_200_OK
        )


class HistoryDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk, *args, **kwargs):
        riwayat = get_object_or_404(RiwayatDeteksi, pk=pk, user=request.user)
        disease_details = get_disease_info(riwayat.disease_name)
        
        return Response(
            {
                "status": "success",
                "data": {
                    "history_id": riwayat.id,
                    "predicted_class": riwayat.disease_name,
                    "confidence_score": round(riwayat.confidence_score, 4),
                    "created_at": riwayat.created_at.isoformat(),
                    "image_url": request.build_absolute_uri(f"/media/{riwayat.image.name}") if riwayat.image else None,
                    "disease_details": {
                        "name": disease_details["name"],
                        "description": disease_details["description"],
                        "treatment": disease_details["treatment"],
                    }
                }
            },
            status=status.HTTP_200_OK
        )

    def delete(self, request, pk, *args, **kwargs):
        riwayat = get_object_or_404(RiwayatDeteksi, pk=pk, user=request.user)
        riwayat.delete()
        return Response(
            {
                "status": "success",
                "message": f"Riwayat deteksi dengan ID {pk} berhasil dihapus."
            },
            status=status.HTTP_200_OK
        )