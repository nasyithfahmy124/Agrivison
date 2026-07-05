from django.contrib.auth.models import User
from rest_framework import serializers
from .models import RiwayatChat,Lokasi,MusimTanam,LuasLahan
from rest_framework import serializers
from .models import Lokasi, MusimTanam, LuasLahan
from django.contrib.auth.models import User
from .models import Profil, Lahan, MusimTanam

class RegisterSeri(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)
    class Meta:
        model = User
        fields = ['username','email','password']
    def create(self,validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email',''),
            password=validated_data['password']
        )
        Profil.objects.create(user=user)
        return user
    
class ChatSeri(serializers.ModelSerializer):
    class Meta:
        model = RiwayatChat
        fields = ['ques','answ']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class ProfilSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True) 

    class Meta:
        model = Profil
        fields = ['id', 'user', 'level', 'total_panen_musim', 'ekspor_berhasil', 'avatar']

class MusimTanamSerializer(serializers.ModelSerializer):
    class Meta:
        model = MusimTanam
        fields = '__all__'

class LahanSerializer(serializers.ModelSerializer):
    musim_tanam_set = MusimTanamSerializer(many=True, read_only=True)

    class Meta:
        model = Lahan
        fields = [
            'id', 'profile', 'nama_lahan', 'luas_lahan', 'komoditas', 
            'provinsi', 'kabupaten_kota', 'kecamatan', 'status_lahan', 
            'created_at', 'updated_at', 'musim_tanam_set'
        ]



    
#masih dikembangkan 
class LokasiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lokasi
        fields = '__all__'

class MusimTanamSerializer(serializers.ModelSerializer):
    class Meta:
        model = MusimTanam
        fields = '__all__'
    def validate(self, data):
        if data['tanggal_panen'] < data['tanggal_mulai']:
            raise serializers.ValidationError({
                "tanggal_panen": "Tanggal panen tidak boleh lebih awal dari tanggal mulai."
            })
        return data

class LuasLahanSerializer(serializers.ModelSerializer):
    luas_hektar = serializers.ReadOnlyField()

    class Meta:
        model = LuasLahan
        fields = ['id', 'luas_meter', 'luas_hektar']


