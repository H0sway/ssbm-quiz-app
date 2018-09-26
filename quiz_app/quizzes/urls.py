# Import Modules
from django.urls import path, re_path, include
from django.contrib import admin
from . import views

# API/Admin URLs
urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('api/quizzes/', views.QuizList.as_view()),
    re_path('api/quizzes/<str:name>/', views.SingleQuiz.as_view()),
    re_path('api/questions/', views.QuestionList.as_view()),
    re_path('api/answers/', views.AnswerList.as_view())
]
