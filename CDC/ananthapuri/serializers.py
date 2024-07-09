# serializers.py
from rest_framework import serializers
from .models import Feature
from .models import Departments
from .models import Testimonials, Gallery
from .models import Blog
from .models import Teachers
class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = ('id', 'title', 'description', 'name')

class DepartmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = '__all__'

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