from django.contrib import admin
from .models import Produk, Order 


@admin.register(Produk)
class ProdukAdmin(admin.ModelAdmin):
    # Kolom apa saja yang mau ditampilkan di tabel admin
    list_display = ('nama', 'kategori', 'price', 'stok', 'penjual', 'tgl')
    
    # Fitur filter di bagian kanan halaman admin
    list_filter = ('kategori', 'tgl')
    
    # Fitur pencarian di halaman admin
    search_fields = ('nama', 'deskripsi')

# 2. Daftarkan model Order
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'buyer', 'get_produk_nama', 'qty', 'status', 'tgl')
    list_filter = ('status', 'tgl')
    search_fields = ('buyer__username', 'produk__nama')

    # Fungsi bantuan agar di tabel order muncul nama produknya, bukan sekadar objek
    def get_produk_nama(self, obj):
        return obj.produk.nama
    get_produk_nama.short_description = 'Nama Produk' # Mengubah nama kolom di tabel admin