
# views.py
from rest_framework import viewsets
from .models import Feature
from .serializers import FeatureSerializer
from .models import Departments
from .serializers import DepartmentsSerializer
from .models import Testimonials, Gallery
from .serializers import TestimonialsSerializer, GallerySerializer

class FeatureViewSet(viewsets.ModelViewSet):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer

class DepartmentsViewSet(viewsets.ModelViewSet):
    queryset = Departments.objects.all()
    serializer_class = DepartmentsSerializer

class TestimonialsViewset(viewsets.ModelViewSet):
    queryset = Testimonials.objects.all()
    serializer_class = TestimonialsSerializer

class GalleryViewset(viewsets.ModelViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer