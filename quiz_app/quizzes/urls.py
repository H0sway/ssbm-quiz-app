# Import Modules
from django.urls import path, re_path
from django.contrib import admin
from . import views

# API/Admin URLs
urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('api/quizzes', views.QuizList.as_view()),
    re_path('api/quizzes/<str:name>/')
]
