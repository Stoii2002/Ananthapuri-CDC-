# serializers.py
from rest_framework import serializers
from .models import Testimonials, Gallery
from .models import Blog
from .models import Teachers

class TestimonialsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonials
        fields = '__all__'

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('id', 'name', 'description', 'image', 'slug', 'Banner')

class Teachersserializer(serializers.ModelSerializer):
    class Meta:
        model = Teachers
        fields = '__all__'