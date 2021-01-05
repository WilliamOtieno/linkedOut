from django.shortcuts import render, get_object_or_404
from .models import Job
from django.views.generic import ListView

# Create your views here.


"""def home(request):
    context = {'jobs': Job.objects.all()}
    return render(request, template_name='jobs/index.html', context=context)"""


class JobListView(ListView):
    model = Job
    template_name = 'jobs/index.html'
    context_object_name = 'jobs'
    paginate_by = 5
