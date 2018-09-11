# Import modules, models
from rest_framework import serializers
from characters.models import Quiz, Question, Answer

class QuizSerializer(serializers.HyperlinkedModelSerializer):
    model = Quiz
    fields = '__all__'

class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    model = Question
    fields = '__all__'

class AnswerSerializer(serializers.HyperlinkedModelSerializer):
    model = Answer
    fields = '__all__'
