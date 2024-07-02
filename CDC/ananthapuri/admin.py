from django.contrib import admin
from .models import Feature  # Import the Feature model
from .models import Departments


admin.site.register(Feature)  # Register the Feature model
admin.site.register(Departments)