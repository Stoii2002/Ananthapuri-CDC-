# serializers.py
from rest_framework import serializers
from .models import Testimonials, Gallery
from .models import Blog
from .models import Teachers
from .models import Contact

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
        fields = ('id', 'name', 'description', 'image', 'slug', 'Banner', 'meta_title')

class Teachersserializer(serializers.ModelSerializer):
    class Meta:
        model = Teachers
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'