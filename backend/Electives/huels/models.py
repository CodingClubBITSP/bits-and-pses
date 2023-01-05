from django.db import models
from django.contrib.auth import get_user_model
import datetime
# Create your models here.

User = get_user_model()

class Courses(models.Model):
    CourseID=models.CharField(max_length=100)
    CourseName=models.CharField(max_length=100)
    Units=models.SmallIntegerField()
    IC_Name=models.CharField(max_length=100,null=True)

class SemEntry(models.Model):
    prof = models.CharField(max_length=50)
    year = models.IntegerField(default=datetime.date.today().year)
    sem = models.IntegerField(choices=((1, 1), (2, 2)))
    overall_exp = models.DecimalField(max_digits=2, decimal_places=1)
    liteness = models.DecimalField(max_digits=2, decimal_places=1)
    grade_sat = models.DecimalField(max_digits=2, decimal_places=1)
    pr = models.IntegerField()
    course=models.ForeignKey(Courses, on_delete=models.CASCADE,null=True)

class Review(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    course=models.ForeignKey(Courses, on_delete=models.CASCADE)
    sem=models.ManyToManyField(SemEntry)
    pr=models.IntegerField()
    experience=models.TextField(max_length=1000)
    liteness= models.DecimalField(max_digits=2, decimal_places=1)
    grade_sat=models.DecimalField(max_digits=2, decimal_places=1)
    positives=models.TextField(max_length=500)
    negatives=models.TextField(max_length=500)
    tips=models.TextField(max_length=500)