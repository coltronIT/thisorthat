from rest_framework import serializers
from .models import (
    Choice,
    Question,
    Vote,
)


class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = ['id', 'title', 'description']


class QuestionSerializer(serializers.ModelSerializer):
    choice_one = ChoiceSerializer(read_only=True)
    choice_two = ChoiceSerializer(read_only=True)

    class Meta:
        model = Question
        fields = ['id', 'choice_one', 'choice_two']


class VoteSerializer(serializers.ModelSerializer):
    question = QuestionSerializer(read_only=True)
    selected_choice = ChoiceSerializer(read_only=True)

    class Meta:
        model = Vote
        fields = ['id', 'question', 'selected_choice']