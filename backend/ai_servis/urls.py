from django.urls import path,include
from .views import DiseaseDetectionView, HistoryListView, HistoryDetailView
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path("api/detect/", DiseaseDetectionView.as_view(), name="deteksi"),
    path("api/history/", HistoryListView.as_view(), name="history-list"),
    path("api/history/<int:pk>/", HistoryDetailView.as_view(), name="history-detail"),
]