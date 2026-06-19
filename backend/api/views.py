from django.shortcuts import render,get_object_or_404
from .serializers import RegisterSeri,ChatSeri
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests
from datetime import datetime
from google import genai
from google.genai import types
from .models import RiwayatChat
import os
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
            
        api_key = '7e4e7f22cd3894519db3e476194d632b'
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
        batas = (
            "kamu adalah ai yang boleh menjawab pertanyaan tentang pertanian"
            "jika ada yang bertanya tentang selain pertanian seperti coding,matematika,sejarah dan lain-lain ,mkaa"
            "jawab gini aku raiso mas"
        )
        config = types.GenerateContentConfig(
            system_instruction=batas,
            temperature=0.5
        )
        respose = tes.models.generate_content(
            model = "gemini-2.5-flash",
            contents=pertanyaan,
            config=config
        )
        riwayat_chat ={
            "ques" : pertanyaan,
            'answ' : respose.text
        }
        seri = ChatSeri(data = riwayat_chat)
        if seri.is_valid():
            seri.save()
        return Response(respose.text,status=status.HTTP_200_OK)
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
    
