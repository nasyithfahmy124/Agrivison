from django.db import models

# Create your models here.
class RiwayatChat(models.Model):
    ques = models.CharField(max_length=1000)
    answ = models.TextField()
    tgl = models.DateTimeField(auto_now_add=True)

    
    
