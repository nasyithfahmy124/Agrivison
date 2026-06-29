from django.db import models
from django.contrib.auth.models import User

class RiwayatDeteksi(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='riwayat_deteksi') 
    image = models.ImageField(upload_to='deteksi_images/')
    disease_name = models.CharField(max_length=255)
    confidence_score = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.disease_name} - {self.created_at.strftime('%Y-%m-%d %H:%M:%S')}"
    
    class Meta:
        ordering = ['-created_at']