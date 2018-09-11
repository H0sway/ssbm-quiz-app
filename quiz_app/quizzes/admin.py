# Import modules
from django.contrib import admin
from .models import Quiz, QuizQuestion

class QuestionInLine(admin.TabularInline):
    model = QuizQuestion
    extra = 5

class QuizAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Quiz Name', {'fields': ['name']})
    ]
    inlines = [QuestionInLine]
    list_display = ('name', 'pub_date')
    list_filter = ['pub_date']
    search_fields = ['name', 'series']

admin.site.register(Quiz, QuizAdmin)
