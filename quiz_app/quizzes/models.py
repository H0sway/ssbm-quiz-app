# Import modules
import datetime
from django.db import models
from django.utils import timezone

# Create your models here.
class Quiz(models.Model):
    name = models.CharField()
    pub_date = models.DateTimeField(auto_now_add=True)

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    text = models.CharField()

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.CharField()
    is_correct = models.BooleanField
