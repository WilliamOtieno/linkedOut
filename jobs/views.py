from django.shortcuts import render
from .models import Job


# Create your views here.


def home(request):
    context = {'jobs': Job.objects.all()}
    return render(request, template_name='jobs/index.html', context=context)

