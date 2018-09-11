# Import modules, models
from rest_framework import serializers
from quizzes.models import Quiz, QuizQuestion

class QuizSerializer(serializers.HyperlinkedModelSerializer):
    model = Quiz
    fields = '__all__'

class QuizQuestionSerializer(serializers.HyperlinkedModelSerializer):
    model = QuizQuestion
    fields = '__all__'
