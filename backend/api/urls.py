from django.urls import path,include
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from rest_framework.routers import DefaultRouter
from .views import ProfilViewSet, LahanViewSet, MusimTanamViewSet,AktivitasView

#fitur settting
router = DefaultRouter()
router.register(r'profil', ProfilViewSet, basename='profil')
router.register(r'lahan', LahanViewSet, basename='lahan')
router.register(r'musim-tanam', MusimTanamViewSet, basename='musimtanam')

#dashboard
dashboard = DefaultRouter()
dashboard.register(r'aktivitas-tanam',AktivitasView,basename="aktivitas")
urlpatterns = [
    #login
    path('agrivision/register/',views.RegisterAkun.as_view(),name='register'),
    path("agrivision/login/", TokenObtainPairView.as_view(), name='login'),
    #dashboarf
    path('agrivision/cuaca/',views.CuacaGPS.as_view(),name='cuaca'),
    path('dashboard/', include(dashboard.urls)),
    # path("agrivision/aktivitas-tanam/", views.AktivitasView, name="aktivitas"),
    #dchatbot
    path("agrivision/chatbot/",views.ChatView.as_view(),name="chatbot"),
    path("agrivision/chatbot/<int:pk>/", views.Riwayat.as_view(), name="chatbot-detail"),
    # path("agrivision/prediksi/",views.FiturPrediksi.as_view(),name="p"),
    
    
    #setting
    path('agrivision/', include(router.urls)),
]

