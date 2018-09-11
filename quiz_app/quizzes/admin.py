# Import modules
from django.contrib import admin
from .models import Quiz, Question, Answer

class AnswerInLine(admin.TabularInline):
    model = Answer
    extra = 5

class QuestionInLine(admin.TabularInline):
    model = Question
    extra = 10
    inlines = [AnswerInLine]

class QuizAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Quiz Name', {'fields': ['name']})
    ]
    inlines = [QuestionInLine]
    list_display = ('name', 'pub_date')
    list_filter = ['pub_date']
    search_fields = ['name', 'series']

admin.site.register(Quiz, QuizAdmin)
