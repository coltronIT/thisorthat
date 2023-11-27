from django.db import models

from .choice import Choice


class Question(models.Model): 
    choice_one = models.ForeignKey(Choice, related_name="choice_one", on_delete=models.CASCADE)
    choice_two = models.ForeignKey(Choice, related_name="choice_two", on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.choice_one.title} or {self.choice_two.title}"
