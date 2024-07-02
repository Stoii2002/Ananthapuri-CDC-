# serializers.py
from rest_framework import serializers
from .models import Feature
from .models import Departments

class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = ('id', 'title', 'description', 'name')

class DepartmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = '__all__'