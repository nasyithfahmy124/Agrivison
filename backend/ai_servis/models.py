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
        
#E-comerce
class Produk(models.Model):
    KATEGORI_CHOICES = [
        ('benih', 'Benih'),
        ('pupuk', 'Pupuk'),
        ('pestisida', 'Pestisida'),
        ('alat', 'Alat Pertanian'),
        ('media_tanam', 'Media Tanam'),
    ]
    penjual = models.ForeignKey(User,on_delete=models.CASCADE,related_name="produk")
    nama = models.CharField(max_length=100)
    kategori = models.CharField(max_length=100,choices=KATEGORI_CHOICES,default='benih')
    deskripsi = models.TextField()
    price = models.DecimalField(max_digits=12,decimal_places=2)
    image = models.ImageField(upload_to="produk",blank=True,null=True)
    stok = models.IntegerField(default=1)
    tgl = models.DateTimeField(auto_now_add=True)

class Order(models.Model):
    buyer = models.ForeignKey(User,on_delete=models.CASCADE,related_name="order")
    produk = models.ForeignKey(Produk,on_delete=models.CASCADE)
    qty = models.IntegerField(default=1)
    status = models.CharField(max_length=100,default="Sukses")
    tgl  = models.DateTimeField(auto_now_add=True)
    