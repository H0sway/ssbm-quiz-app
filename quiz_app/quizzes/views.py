# Import Modules
from quizzes.models import Quiz
from quizzes.serializers import QuizSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView

# API Views.

# View all the quizzes
class QuizList(ListAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

# View a single quiz
class SingleQuiz(RetrieveAPIView):
    model = Quiz
    serializer_class = QuizSerializer
