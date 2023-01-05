from django.shortcuts import render
import io
from django.core import serializers
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse, JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from .models import Courses

@csrf_exempt
def getAllCourseList(request):
    SomeModel_json = serializers.serialize("json", Courses.objects.all())
    data = {"Course List": SomeModel_json}
    return JsonResponse(data)
    