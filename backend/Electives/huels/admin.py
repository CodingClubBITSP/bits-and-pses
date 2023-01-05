from django.contrib import admin
from .models import Courses
from import_export import resources
from import_export.admin import ImportExportModelAdmin
class CourseResource(resources.ModelResource):
   class Meta:
      model = Courses
class CourseAdmin(ImportExportModelAdmin):
   resource_class = CourseResource

admin.site.register(Courses,CourseAdmin)