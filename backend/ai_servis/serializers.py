from rest_framework import serializers
from .models import RiwayatDeteksi,Produk,Order
from .models import Produk, Order, RiwayatDeteksi

ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"]
MAX_IMAGE_SIZE_MB = 5


class PlantImageSerializer(serializers.Serializer):
    """
    Memvalidasi file gambar yang dikirim via form-data (key: 'image').
    """

    image = serializers.ImageField(
        error_messages={
            "required": "Field 'image' wajib diisi.",
            "invalid_image": "File yang diunggah bukan gambar yang valid.",
            "empty": "File gambar tidak boleh kosong.",
        }
    )

    def validate_image(self, image):
        if image.content_type not in ALLOWED_IMAGE_TYPES:
            raise serializers.ValidationError(
                f"Tipe file tidak didukung ({image.content_type}). "
                f"Gunakan: {', '.join(ALLOWED_IMAGE_TYPES)}."
            )
        max_bytes = MAX_IMAGE_SIZE_MB * 1024 * 1024
        if image.size > max_bytes:
            raise serializers.ValidationError(
                f"Ukuran file melebihi batas maksimal {MAX_IMAGE_SIZE_MB} MB."
            )

        return image
    
class RiwayatDeteksiListSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = RiwayatDeteksi
        fields = ['id', 'image', 'disease_name', 'confidence_score', 'created_at']
    def get_image(self, obj):
        if obj.image:
            request = self.context.get('request')
            if request is not None:
                return request.build_absolute_uri(f"/media/{obj.image.name}")
            return f"/media/{obj.image.name}"
        return None
    
class ProdukSeri(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    class Meta:
        model = Produk
        fields = ['id','nama','kategori','deskripsi','price','image','stok']
    def get_image(self, obj):
        if obj.image:
            return f"/media/{obj.image.name}"
        return None
        
class OrderSeri(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['produk','qty']
        

#menampilkan produk rekomendasi 
class ProdukSerializer(serializers.ModelSerializer):

    class Meta:
        model = Produk
        fields = [
            'id', 'penjual', 'nama', 'kategori',
            'deskripsi', 'price', 'image', 'stok', 'tgl',
        ]
        read_only_fields = fields
