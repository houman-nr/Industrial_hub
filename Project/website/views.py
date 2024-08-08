from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from .forms import TourForm
from .models import TourImage, TourVideo

def home_view(request):
    return render(request, 'website_templates/home.html')


@login_required
def create_tour(request):
    if request.method == 'POST':
        form = TourForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('success_url')  # Replace with your actual success redirect
    else:
        form = TourForm()
    return render(request, 'your_template.html', {'form': form})





