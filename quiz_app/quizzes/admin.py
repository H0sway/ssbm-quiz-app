# Import modules
from django.contrib import admin
from .models import Quiz, QuizQuestion, Answer

class AnswersInline(admin.TabularInline):
    model = Answer

class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Quiz', {'fields': ['quiz']}),
        ('Question', {'fields': ['question_text']}),
        ('Explanation', {'fields': ['explanation_text']})
    ]
    inlines = [AnswersInline]
    list_display = ('question_text', 'quiz')
    list_filter = ['quiz']
    search_fields = ['question_text']

class QuizAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Quiz Name', {'fields': ['name']})
    ]
    list_display = ('name', 'pub_date')
    list_filter = ['pub_date']
    search_fields = ['name']

admin.site.register(Quiz, QuizAdmin)
admin.site.register(QuizQuestion, QuestionAdmin)
