from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('courses/', include('apps.courses.urls')),
    path('users/', include('apps.users.urls')),
    # Add other app URLs here
]