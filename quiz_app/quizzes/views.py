# Import Modules
from quizzes.models import Quiz, Question, Answer
from quizzes.serializers import QuizSerializer, QuestionSerializer, AnswerSerializer
from django.views import generic

# API Views.

# View all the quizzes
class QuizList(generic.ListView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

# View a single quiz
class SingleQuiz(generic.DetailView):
    model = Quiz
    serializer_class = QuizSerializer
