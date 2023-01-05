from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class Courses(models.Model):
    CourseID=models.CharField(max_length=100)
    CourseName=models.CharField(max_length=100)
    Units=models.SmallIntegerField()
    IC_Name=models.CharField(max_length=100)
User = get_user_model()
