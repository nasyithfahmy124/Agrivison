from django.shortcuts import render,get_object_or_404
from .serializers import RegisterSeri,ChatSeri
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,viewsets
import requests
from datetime import datetime
from google import genai
from google.genai import types
from .models import RiwayatChat,Lokasi,MusimTanam,Profil,Lahan
import os
from django.db import transaction
from rest_framework.permissions import IsAuthenticated
from .serializers import LokasiSerializer, LuasLahanSerializer,LahanSerializer,ProfilSerializer,MusimTanamSerializer
# Create your views here.
class RegisterAkun(APIView):
    def post(self,request):
        seri = RegisterSeri(data=request.data)
        if seri.is_valid():
            seri.save()
            return Response(
                {'message' : 'akun  berhasil dibuat!'},
                status=status.HTTP_200_OK
            )
        return Response(seri.errors,status=status.HTTP_400_BAD_REQUEST)

class CuacaGPS(APIView):
    def get(self, request):
        lat = request.query_params.get('lat')
        lon = request.query_params.get('lon')
        
        if not lat or not lon:
            return Response(
                {"error": "gps e kurang jelas"},
                status=status.HTTP_400_BAD_REQUEST
            )
            
        api_key = os.getenv("OPENWEATHER_API_KEY")
        url = 'https://api.openweathermap.org/data/2.5/forecast'
        payload = {
            'lat': lat,
            'lon': lon,
            'appid': api_key,
            'units': 'metric',
            'lang': 'id'
        }
        response = requests.get(url, params=payload)
        if response.status_code == 200:
            raw_data = response.json()
            prakiraan_harian = []
            hari_terproses = set()
            
            for item in raw_data.get('list', []):
                tanggal = item['dt_txt'].split(' ')[0]
                if tanggal not in hari_terproses:
                    hari_terproses.add(tanggal)
                    dt_obj = datetime.strptime(tanggal, "%Y-%m-%d")
                    nama_hari = dt_obj.strftime("%a") 
                    data_hari_ini = {
                        "hari": nama_hari,
                        "tanggal": tanggal,
                        "suhu_max": round(item['main']['temp_max']),
                        "suhu_min": round(item['main']['temp_min']),
                        "kondisi": item['weather'][0]['main'],       
                        "deskripsi": item['weather'][0]['description'],
                        "kelembaban": item['main']['humidity']       
                    }
                    prakiraan_harian.append(data_hari_ini)
            return Response({"perkiraan": prakiraan_harian}, status=status.HTTP_200_OK)
            
        return Response(
            {"error": "gagal mengambil data ramalan cuaca"}, 
            status=status.HTTP_400_BAD_REQUEST
        )
        
class ChatView(APIView):
    def post(self,request):
        pertanyaan = request.data.get("pertanyaan")
        if not pertanyaan:
            return Response(
                {"error": "tolong kirim pesan yang jelas"},
                status=status.HTTP_400_BAD_REQUEST
            )
            
        api_key = os.getenv("GEMINI_API_KEY")
        tes = genai.Client(api_key=api_key)
        batas = """
            Kamu adalah AgroVision AI.

            Identitas:
            - Konsultan Agribisnis Senior
            - Ahli Budidaya Tanaman
            - Ahli Ketahanan Pangan
            - Ahli Agripreneur
            - Ahli Teknologi Pertanian Modern
            - Mentor Bisnis Pertanian

            Tujuan Utama:
            Membantu petani, mahasiswa, agripreneur, UMKM pangan, dan pelaku agribisnis mengambil keputusan yang lebih baik.

            Gaya Komunikasi:
            - Profesional
            - Ramah
            - Mudah dipahami
            - Tidak terlalu akademis
            - Tidak bertele-tele
            - Fokus solusi

            Aturan Jawaban:

            1. Hanya menjawab topik:
            - Pertanian
            - Agribisnis
            - Perkebunan
            - Peternakan
            - Pangan
            - Ketahanan pangan
            - Teknologi pertanian
            - Cuaca pertanian
            - Penyakit tanaman
            - Hama tanaman
            - Hidroponik
            - Greenhouse
            - Smart farming
            - UMKM pertanian
            - Pemasaran hasil pertanian

            2. Jika di luar bidang tersebut jawab:

            "Aku raiso mas 😅.
            Aku hanya fokus membantu seputar pertanian, agribisnis, dan teknologi pertanian."

            3. Selalu gunakan Markdown.

            4. Jangan menulis paragraf panjang.

            5. Gunakan heading yang jelas.

            6. Jika memungkinkan gunakan bullet point.

            7. Jika pengguna meminta solusi:
            - Jelaskan masalah
            - Analisis penyebab
            - Berikan solusi
            - Berikan rekomendasi praktis

            8. Jika pengguna meminta strategi bisnis:
            - Analisis peluang
            - Risiko
            - Modal
            - Potensi keuntungan
            - Langkah implementasi

            9. Jika pengguna bertanya penyakit tanaman:
            - Gejala
            - Penyebab
            - Dampak
            - Penanganan
            - Pencegahan

            10. Jika pengguna bertanya budidaya:
            - Persiapan
            - Perawatan
            - Risiko
            - Tips meningkatkan hasil

            11. Jika informasi tidak pasti:
            Katakan bahwa informasi perlu diverifikasi di lapangan.

            12. Prioritaskan jawaban yang:
            - Praktis
            - Bisa langsung diterapkan
            - Memberikan nilai ekonomi

            13. Jangan membuat informasi palsu.

            14. Jangan menjawab dengan satu paragraf panjang.

            15. Selalu akhiri dengan:

            ## Rekomendasi AgroVision

            dan berikan 2-3 langkah praktis.
            """
        config = types.GenerateContentConfig(
            system_instruction=batas,
            temperature=0.3
        )
        prompt_user = f"""
            Pertanyaan pengguna:

            {pertanyaan}

            Instruksi:

            1. Identifikasi intent pengguna terlebih dahulu.
            2. Tentukan apakah pertanyaan termasuk:
            - Budidaya
            - Penyakit tanaman
            - Agribisnis
            - Ketahanan pangan
            - Teknologi pertanian
            - Cuaca pertanian
            - Edukasi umum pertanian

            3. Berpikir langkah demi langkah sebelum menjawab.

            4. Berikan jawaban yang paling bermanfaat secara praktis.

            5. Jangan hanya menjelaskan definisi.

            6. Fokus pada:
            - Apa artinya
            - Kenapa penting
            - Dampaknya
            - Apa yang harus dilakukan

            7. Gunakan markdown yang rapi.
            """
        response = tes.models.generate_content(
            model = "gemini-2.5-flash",
            contents=prompt_user,
            config=config
        )
        riwayat_chat ={"ques" : pertanyaan,'answ' : response.text}
        seri = ChatSeri(data = riwayat_chat)
        if seri.is_valid():
            seri.save()
        return Response(response.text,status=status.HTTP_200_OK)
    def get(self,request):
        chat = RiwayatChat.objects.all().order_by('-tgl')
        seri = ChatSeri(chat,many=True)
        return Response(seri.data,status=status.HTTP_200_OK)
    

class Riwayat(APIView):
    def get(self,request,pk):
        chat = get_object_or_404(RiwayatChat,pk=pk)
        serializers = ChatSeri(chat)
        return Response(serializers.data,status=status.HTTP_200_OK)
    def delete(self,request,pk):
        hps = get_object_or_404(RiwayatChat,pk=pk)
        hps.delete()
        return Response({"message":"chat berhasil dihapus"},status=status.HTTP_204_NO_CONTENT)

#setting 
class ProfilViewSet(viewsets.ModelViewSet):
    queryset = Profil.objects.all()
    serializer_class = ProfilSerializer
    permission_classes = [IsAuthenticated]
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class LahanViewSet(viewsets.ModelViewSet):
    serializer_class = LahanSerializer
    def get_queryset(self):
        return Lahan.objects.filter(profile__user=self.request.user)
    
class MusimTanamViewSet(viewsets.ModelViewSet):
    queryset = MusimTanam.objects.all()
    serializer_class = MusimTanamSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        return MusimTanam.objects.filter(lahan__profile__user=self.request.user)
    
    
#tahap pengembangan
class FiturPrediksi(APIView):
    def get(self, request, *args, **kwargs):
        return Response({
            "message": "Endpoint ini aktif. Gunakan method POST untuk mengirim data pertanian."
        }, status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):
        data_lokasi = request.data.get('lokasi')
        data_musim = request.data.get('musim_tanam')
        data_lahan = request.data.get('luas_lahan')
        
        serializer_lokasi = LokasiSerializer(data=data_lokasi)
        serializer_musim = MusimTanamSerializer(data=data_musim)
        serializer_lahan = LuasLahanSerializer(data=data_lahan)
        
        is_lokasi_valid = serializer_lokasi.is_valid()
        is_musim_valid = serializer_musim.is_valid()
        is_lahan_valid = serializer_lahan.is_valid()
        
        if is_lokasi_valid and is_musim_valid and is_lahan_valid:
            with transaction.atomic():
                lokasi_obj = serializer_lokasi.save()
                musim_obj = serializer_musim.save()
                lahan_obj = serializer_lahan.save()
            return Response({
                "status": "success",
                "message": "Data pertanian berhasil dicatat!",
                "hasil": {
                    "lokasi": serializer_lokasi.data,
                    "musim_tanam": serializer_musim.data,
                    "luas_lahan": serializer_lahan.data
                }
            }, status=status.HTTP_201_CREATED)
            
        gabungan_error = {}
        if not is_lokasi_valid:
            gabungan_error['lokasi'] = serializer_lokasi.errors
        if not is_musim_valid:
            gabungan_error['musim_tanam'] = serializer_musim.errors
        if not is_lahan_valid:
            gabungan_error['luas_lahan'] = serializer_lahan.errors
            
        return Response({
            "status": "error",
            "message": "Validasi gagal, silakan periksa inputan Anda.",
            "errors": gabungan_error
        }, status=status.HTTP_400_BAD_REQUEST)
    
