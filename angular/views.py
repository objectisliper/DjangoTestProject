from django.shortcuts import render

# Create your views here.


def index(request, path="", path2=""):

    return render(request, 'index.html')

