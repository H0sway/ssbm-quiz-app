# Import modules
from django.contrib import admin
from .models import Quiz, Question, Answer

class AnswerInLine(admin.TabularInline):
    model = Answer
    extra = 5

class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Question', {'fields': ['question_text']}),
        ('Answer Explanation:' {'fields': ['explanation_text']})
    ]
    inlines = [AnswerInLine]

class QuizAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Quiz Name', {'fields': ['name']})
    ]
    inlines = [QuestionAdmin]
    list_display = ('name', 'pub_date')
    list_filter = ['pub_date']
    search_fields = ['name', 'series']

admin.site.register(Quiz, Question, QuizAdmin, QuestionAdmin)
