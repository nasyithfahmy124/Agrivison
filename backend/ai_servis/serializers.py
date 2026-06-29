from rest_framework import serializers
from .models import RiwayatDeteksi

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
    class Meta:
        model = RiwayatDeteksi
        fields = ['id', 'image', 'disease_name', 'created_at']