# views.py
from rest_framework import viewsets
from .models import Feature
from .serializers import FeatureSerializer
from .models import Departments
from .serializers import DepartmentsSerializer
from .models import Testimonials, Gallery
from .serializers import TestimonialsSerializer, GallerySerializer
from rest_framework import generics
from .models import Blog
from .serializers import BlogSerializer
from .models import Teachers
from .serializers import Teachersserializer

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

class TeacherViewset(viewsets.ModelViewSet):
    queryset = Teachers.objects.all()   
    serializer_class = Teachersserializer

class BlogListView(generics.ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class BlogDetailView(generics.RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'slug'

