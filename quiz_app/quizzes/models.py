# Import modules
import datetime
from django.db import models
from django.utils import timezone

# Create your models here.
class Quiz(models.Model):
    name = models.CharField(max_length=50)
    pub_date = models.DateTimeField(auto_now_add=True)

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    question_text = models.CharField(max_length=300)
    explanation_text = models.CharField(max_length=2000)

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.CharField(max_length=300)
    is_correct = models.BooleanField()
