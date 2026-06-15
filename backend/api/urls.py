from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
urlpatterns = [
    path('agrivision/register/',views.RegisterAkun.as_view(),name='register'),
    path("agrivision/login/", TokenObtainPairView.as_view(), name='login')
]
