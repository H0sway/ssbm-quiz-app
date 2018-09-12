# Import modules
from django.contrib import admin
from nested_admin import NestedModelAdmin, NestedStackedInline, NestedTabularInline
from .models import Quiz, QuizQuestion, Answer

class AnswersInline(NestedTabularInline):
    model = Answer

class QuestionInline(NestedStackedInline):
    model = QuizQuestion
    inlines = [AnswersInline,]

class QuizAdmin(NestedModelAdmin):
    fieldsets = [
        ('Quiz Name', {'fields': ['name']})
    ]
    inlines = [QuestionInline,]
    list_display = ('name', 'pub_date')
    list_filter = ['pub_date']
    search_fields = ['name', 'series']

admin.site.register(Quiz, QuizAdmin)
