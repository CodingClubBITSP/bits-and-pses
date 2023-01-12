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
from .serializers import ReviewSerializer
import statistics

#@csrf_exempt
class CourseList(APIView):
    def get(self,request):
        SomeModel_json = serializers.serialize("json", Courses.objects.all())
        response1 = []
        data = {"Course List": SomeModel_json}
        courses = Courses.objects.all()
        for course in courses:
    
            response1.append({ "course_name": course.CourseName,"CourseID" : course.CourseID,
                    "Units": course.Units})

        #return JsonResponse(data)
        return Response(response1, status=status.HTTP_200_OK)
class CourseView(APIView):
    def post(self, request):
        temp=request.data
        course_id = request.data['CourseID']
        course = Courses.objects.filter(CourseID=course_id).first()
        sem=SemEntry.objects.filter(course=course).first()
        response  = []
        print(course)
        review=Review.objects.filter(sem=sem)
        prlist=[]
        overalllist=[]
        litenesslist=[]
        gradinglist=[]
        reviews={}
        for r in review:
             prlist.append(r.pr)
             overalllist.append(r.overall_exp)
             litenesslist.append(r.liteness)
             gradinglist.append(r.grade_sat)
             reviews[r.user.get_username()]=r.tips
        prmedian=statistics.median(prlist)
        experiencemedian=statistics.median(overalllist)
        litenessmedian=statistics.median(litenesslist)
        gradingmedian=statistics.median(gradinglist)
        response.append({
                    "CourseID": course.CourseID,  
                    "CourseName": course.CourseName,
                    "Units": course.Units,
                    "IC_Name":sem.IC_Name,
                    "pr":prmedian,
                    "overall_exp":experiencemedian,
                    "liteness":litenessmedian,
                    "grade_sat":gradingmedian,

                    "Reviews":reviews,
                })
        return Response(response, status=status.HTTP_200_OK)

class ReviewView(APIView):
    def post(self, request, *args, **kwargs):
        data = { 
            'user': request.user.id,
            'reviewed_course': request.data.get('reviewed_course'),
            'sem': request.data.get('sem'),
            'pr': request.data.get('pr'),
            'experience': request.data.get('experience'),
            'liteness': request.data.get('liteness'),
            'grade_sat': request.data.get('grade_sat'),
            'tips': request.data.get('tips')
        }
        serializer = ReviewSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
