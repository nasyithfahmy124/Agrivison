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
from .models import Produk, Order, RiwayatDeteksi
from .serializers import ProdukSerializer


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
    permission_classes = [IsAuthenticated]
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
        
        #Memuat Model ML
        try:
            model, class_names = _get_model_and_classes()
        except RuntimeError as e:
            logger.error(str(e))
            return Response(
                {"status": "error", "message": str(e)},
                status=status.HTTP_503_SERVICE_UNAVAILABLE,
            )
            
        #Memproses Gambar
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
        
from .models import Produk,Order
from .serializers import ProdukSeri,OrderSeri
from django.db.models import Q
class CreateProduk(APIView):
    serializer_class = ProdukSeri
    permission_classes = [IsAuthenticated]
    def get(self, request):
        kategori_dipilih= request.query_params.get('kategori',None)
        cari_produk = request.query_params.get('search',None)
        
        semua_produk = Produk.objects.all().order_by('-tgl')
        if kategori_dipilih :
            semua_produk = semua_produk.filter(kategori=kategori_dipilih).order_by('-tgl')
        if cari_produk:
            semua_produk =semua_produk.filter(
                Q(nama__icontains=cari_produk) | Q(deskripsi__icontains=cari_produk)
            )
            
        semua_produk = semua_produk.order_by('-tgl')
        serializer = ProdukSeri(semua_produk,many=True,context={'request': request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    def post(self,request):
        produk = ProdukSeri(data = request.data)
        if produk.is_valid():
            produk.save(penjual = request.user)
            return Response(
                {"message":"produk berhasil dibuat!"},
                status=status.HTTP_201_CREATED
                )
        return Response(produk.errors,status=status.HTTP_400_BAD_REQUEST)
    
    
class OrderView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        #riwayat order
        riwayat = Order.objects.all().order_by('-tgl')
        serializer = OrderSeri(riwayat,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    def post(self, request):
        serializer = OrderSeri(data=request.data)
        if serializer.is_valid():
            produk_obj = serializer.validated_data['produk']
            produk_qty = serializer.validated_data['qty']
            
            if produk_obj.stok < produk_qty:
                return Response(
                    {"error": f"Stok tidak mencukupi. Sisa stok: {produk_obj.stok}"},
                    status=status.HTTP_400_BAD_REQUEST
                )
            else:
                produk_obj.stok -= produk_qty
                produk_obj.save()
                serializer.save(buyer=request.user if request.user.is_authenticated else None)
                
                return Response(
                    {"message": "berhasil!", "sisa_stok": produk_obj.stok},
                    status=status.HTTP_201_CREATED
                )
                
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    
# ai_servis/views.py
from django.db.models import Q, F
from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

KEYWORD_PADI = [
    'leaf smut', 'bacterial leaf blight', 'brown spot',
    'bacterial leaf stripe', 'blast', 'hama pelipat daun',
]
KEYWORD_TOMAT = ['tomat', 'tomato']
KEYWORD_HAMA = ['hama', 'insect', 'spider mite', 'pelipat daun']


def get_keywords_from_disease(disease_name):
    """
    Fungsi if-else tipis untuk memetakan disease_name (hasil deteksi AI)
    menjadi daftar keyword yang dipakai mencari produk terkait.
    """
    name = (disease_name or '').lower()
    keywords = []

    if 'healty' in name or 'sehat' in name:
        # Tanaman sehat -> arahkan ke produk perawatan umum
        keywords.append('pupuk')
        return keywords

    if any(k in name for k in KEYWORD_TOMAT):
        keywords.append('tomat')

    if any(k in name for k in KEYWORD_PADI):
        keywords.append('padi')

    if any(k in name for k in KEYWORD_HAMA):
        keywords.append('pestisida')
        keywords.append('hama')

    return keywords


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def rekomendasi_produk(request):
    user = request.user
    riwayat_terakhir = RiwayatDeteksi.objects.filter(user=user).order_by('-created_at').first()
    if riwayat_terakhir:
        keywords = get_keywords_from_disease(riwayat_terakhir.disease_name)

        produk_qs = Produk.objects.none()
        if keywords:
            query = Q()
            for kw in keywords:
                query |= Q(nama__icontains=kw) | Q(deskripsi__icontains=kw) | Q(kategori__icontains=kw)
            produk_qs = Produk.objects.filter(query, stok__gt=0).distinct()[:10]

        if produk_qs.exists():
            return Response({
                "tipe_rekomendasi": "berdasarkan_riwayat_deteksi",
                "disease_name": riwayat_terakhir.disease_name,
                "keywords_digunakan": keywords,
                "jumlah_produk": produk_qs.count(),
                "produk": ProdukSerializer(produk_qs, many=True, context={'request': request}).data,
            }, status=status.HTTP_200_OK)

        produk_fallback = Produk.objects.filter(stok__gt=0).order_by('-stok')[:10]
        return Response({
            "tipe_rekomendasi": "fallback_stok_terbanyak",
            "disease_name": riwayat_terakhir.disease_name,
            "keywords_digunakan": keywords,
            "keterangan": "Produk spesifik untuk penyakit ini belum tersedia, menampilkan produk stok terbanyak.",
            "jumlah_produk": produk_fallback.count(),
            "produk": ProdukSerializer(produk_fallback, many=True, context={'request': request}).data,
        }, status=status.HTTP_200_OK)

    produk_populer = Produk.objects.filter(stok__gt=0).order_by('-stok')[:10]
    return Response({
        "tipe_rekomendasi": "produk_stok_terbanyak",
        "keterangan": "User belum memiliki riwayat deteksi penyakit.",
        "jumlah_produk": produk_populer.count(),
        "produk": ProdukSerializer(produk_populer, many=True, context={'request': request}).data,
    }, status=status.HTTP_200_OK)
