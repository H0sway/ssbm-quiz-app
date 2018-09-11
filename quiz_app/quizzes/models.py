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

    class Meta:
        unique_together = [
            # No duplicate questions per quiz
            ('quiz', 'question_text')
        ]

class Answer(models.Model):
    question = models.ForeignKey(QuizQuestion, on_delete=models.CASCADE)
    text = models.CharField(max_length=200)
    correct = models.BooleanField(default=False)

    class Meta:
        unique_together = [
            # No duplicate answers per question
            ('question', 'text')
        ]
