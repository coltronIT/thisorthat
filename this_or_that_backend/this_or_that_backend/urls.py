from django.contrib import admin
from django.urls import path

from .views import (
    ChoiceDetails,
    ChoiceList,
    QuestionDetails,
    QuestionList,
    VoteDetails,
    VoteList,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('choices/', ChoiceList.as_view(), name='choice-list'),
    path('choices/<int:pk>/', ChoiceDetails.as_view(), name='choice-detail'),

    # URLs for questions
    path('questions/', QuestionList.as_view(), name='question-list'),
    path('questions/<int:pk>/', QuestionDetails.as_view(), name='question-detail'),

    # URLs for votes
    path('votes/', VoteList.as_view(), name='vote-list'),
    path('votes/<int:pk>/', VoteDetails.as_view(), name='vote-detail'),
]
