# Import Modules
from quizzes.models import Quiz, QuizQuestion, Answer
from quizzes.serializers import QuizSerializer, QuizQuestionSerializer, AnswerSerializer
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

# View the questions for a single quiz
class QuestionList(ListAPIView):
    queryset = QuizQuestion.objects.all()
    serializer_class = QuizQuestionSerializer

# View all the answers for a quiestion
class AnswerList(ListAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
