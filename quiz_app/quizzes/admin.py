# Import modules
from django.contrib import admin
from .models import Quiz, QuizQuestion, Answer

class AnswersStacked(admin.TabularInline):
    model = Answer
    extra = 5

class QuestionAdmin(admin.StackedInline):
    model = QuizQuestion
    inlines = [AnswersStacked]
    extra = 5

class QuizAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Quiz Name', {'fields': ['name']})
    ]
    inlines = [QuestionAdmin]
    list_display = ('name', 'pub_date')
    list_filter = ['pub_date']
    search_fields = ['name', 'series']

admin.site.register(Quiz, QuizAdmin)
