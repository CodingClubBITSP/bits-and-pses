from django.shortcuts import render
import io
from django.core import serializers
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse, JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from .models import *
from rest_framework import status
from rest_framework.views import APIView, Response
import json
from django.contrib.auth.mixins import LoginRequiredMixin

@csrf_exempt
def getAllCourseList(request):
    SomeModel_json = serializers.serialize("json", Courses.objects.all())
    data = {"Course List": SomeModel_json}
    return JsonResponse(data)

class CourseView(APIView):
    def get(self, request):
        course_id = request.data['CourseID']
        course = Courses.objects.filter(CourseID=course_id).first()
        response  = []
        print(course)
        response.append({
                    "course_name": course.CourseName,
                })
        return Response(response, status=status.HTTP_200_OK)
