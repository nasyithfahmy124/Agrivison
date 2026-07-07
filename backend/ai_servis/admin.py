from django.contrib import admin
from .models import Produk, Order 


@admin.register(Produk)
class ProdukAdmin(admin.ModelAdmin):
    list_display = ('nama', 'kategori', 'price', 'stok', 'penjual', 'tgl')
    list_filter = ('kategori', 'tgl')
    search_fields = ('nama', 'deskripsi')

# 2. Daftarkan model Order
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'buyer', 'get_produk_nama', 'qty', 'status', 'tgl')
    list_filter = ('status', 'tgl')
    search_fields = ('buyer__username', 'produk__nama')

    def get_produk_nama(self, obj):
        return obj.produk.nama
    get_produk_nama.short_description = 'Nama Produk'