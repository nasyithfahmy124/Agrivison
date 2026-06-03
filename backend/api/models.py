from django.db import models

# Create your models here.
class Tes(models.Model):
    nama = models.CharField(max_length=100)
    