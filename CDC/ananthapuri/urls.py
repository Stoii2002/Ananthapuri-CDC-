# ananthapuri/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TestimonialsViewset, GalleryViewset, TeacherViewset
from . import views


# Create a single router instance
router = DefaultRouter()
# Register both viewsets with the router
router.register(r'Testimonials', TestimonialsViewset, basename='Testimonials')
router.register(r'Gallery',GalleryViewset, basename='Gallery')
router.register(r'Teachers',TeacherViewset, basename='Teachers')
from .views import contact_form_submission

# Define urlpatterns to include the router's URLs
urlpatterns = [
    path('', include(router.urls)),  # This includes /api/features/ and /api/departments/
     path('blogs/', views.BlogListView.as_view()),
     path('fullblogs/', views.FullBlogListView.as_view()),
    path('blogs/<slug:slug>/', views.BlogDetailView.as_view()),
     path('contact/', contact_form_submission, name='contact_form_submission'),
]
