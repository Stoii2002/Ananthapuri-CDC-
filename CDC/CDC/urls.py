"""CDC URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

# CDC/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from ananthapuri.views import FeatureViewSet
from . import views
from django.conf.urls.static import static
from django.conf import settings

admin.site.site_header = 'Admin'
admin.site.site_title = 'Admin'
admin.site.index_title = 'Dashboard'

router = DefaultRouter()
router.register(r'features', FeatureViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('ananthapuri.urls')),  # Include app URLs
    path('', views.home, name='home'),
    # other paths
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
