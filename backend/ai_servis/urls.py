from django.urls import path,include
from .views import DiseaseDetectionView, HistoryListView, HistoryDetailView
from rest_framework.routers import DefaultRouter
from . import views
urlpatterns = [
    #pendeteksi
    path("api/detect/", DiseaseDetectionView.as_view(), name="deteksi"),
    path("api/history/", HistoryListView.as_view(), name="history-list"),
    path("api/history/<int:pk>/", HistoryDetailView.as_view(), name="history-detail"),
    #marketplace
    path('market/produk/',views.CreateProduk.as_view(),name="addproduk"),
    path('market/order/',views.OrderView.as_view(),name='order')
]