from django.urls import path,include
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from rest_framework.routers import DefaultRouter
from .views import ProfilViewSet, LahanViewSet, MusimTanamViewSet

router = DefaultRouter()
router.register(r'profil', ProfilViewSet, basename='profil')
router.register(r'lahan', LahanViewSet, basename='lahan')
router.register(r'musim-tanam', MusimTanamViewSet, basename='musimtanam')

urlpatterns = [
    path('agrivision/register/',views.RegisterAkun.as_view(),name='register'),
    path("agrivision/login/", TokenObtainPairView.as_view(), name='login'),
    path('agrivision/cuaca/',views.CuacaGPS.as_view(),name='cuaca'),
    path("agrivision/chatbot/",views.ChatView.as_view(),name="chatbot"),
    path("agrivision/chatbot/<int:pk>/", views.Riwayat.as_view(), name="chatbot-detail"),
    # path("agrivision/prediksi/",views.FiturPrediksi.as_view(),name="p"),
    path('agrivision/', include(router.urls)),
]

