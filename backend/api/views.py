from django.shortcuts import render
from .serializers import RegisterSeri
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests
from datetime import datetime
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