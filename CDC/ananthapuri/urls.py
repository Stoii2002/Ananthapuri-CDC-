# ananthapuri/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FeatureViewSet, DepartmentsViewSet

# Create a single router instance
router = DefaultRouter()
# Register both viewsets with the router
router.register(r'features', FeatureViewSet, basename='feature')
router.register(r'departments', DepartmentsViewSet, basename='departments')

# Define urlpatterns to include the router's URLs
urlpatterns = [
    path('', include(router.urls)),  # This includes /api/features/ and /api/departments/
]
