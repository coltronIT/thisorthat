from django.db import models

from .choice import Choice
from .question import Question


class Vote(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    selected_choice = models.ForeignKey(Choice, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.selected_choice} was voted for"
