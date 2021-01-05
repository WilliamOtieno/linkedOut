from django.db import models
from django.utils import timezone


# Create your models here.

class Job(models.Model):
    job_title = models.CharField(max_length=50)
    company_name = models.CharField(max_length=30)
    county = models.CharField(max_length=20)
    email = models.EmailField()
    phone_num = models.CharField(max_length=12)
    description = models.TextField(max_length=500)
    date_posted = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.job_title
