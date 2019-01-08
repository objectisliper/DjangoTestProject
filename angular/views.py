from django.shortcuts import render

# Create your views here.


def index(request, path="", path2="", path3=""):

    return render(request, 'index.html')

