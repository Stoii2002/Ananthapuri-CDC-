
# views.py
from rest_framework import viewsets
from .models import Feature
from .serializers import FeatureSerializer
from .models import Departments
from .serializers import DepartmentsSerializer

class FeatureViewSet(viewsets.ModelViewSet):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer

class DepartmentsViewSet(viewsets.ModelViewSet):
    queryset = Departments.objects.all()
    serializer_class = DepartmentsSerializer