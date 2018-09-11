# Import modules
import datetime
from django.db import models
from django.utils import timezone

# Create your models here.
class Quiz(models.Model):
    name = models.CharField(max_length=50)
    pub_date = models.DateTimeField(auto_now_add=True)

class QuizQuestion(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    question_text = models.CharField(max_length=300)
    explanation_text = models.CharField(max_length=2000)
    not_fake = models.CharField(max_length=200)
    fake_one = models.CharField(max_length=200)
    fake_two = models.CharField(max_length=200)
    fake_three = models.CharField(max_length=200)
    fake_also = models.CharField(max_length=200)
