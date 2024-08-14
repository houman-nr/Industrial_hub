from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from authentication.models import CompanyUser
from .forms import TourForm
from .models import TourImage, Tour
from django.shortcuts import render, get_object_or_404
from django.core.paginator import Paginator

def home_view(request):
    return render(request, 'website_templates/home.html')


@login_required
def tour_create_view(request):
    if not request.user.is_company:
        return render(request, 'website_templates/home.html')
    try:
        company_user = request.user.companyuser
    except CompanyUser.DoesNotExist:
        return render(request, 'website_templates/home.html')

    existing_tour = company_user.tours.first()

    if request.method == 'POST':
        tour_form = TourForm(request.POST, request.FILES)
        images = request.FILES.getlist('images')

        if tour_form.is_valid():
            if existing_tour:
                existing_tour.delete()

            tour = tour_form.save(commit=False)
            tour.company_user = company_user
            tour.save()

            for image in images:
                TourImage.objects.create(tour=tour, image=image)

            return render(request, 'website_templates/companyProfile.html',{'user' : request.user})  # Adjust to your success URL or render a success page

    else:
        tour_form = TourForm()

    return render(request, 'website_templates/tourCreating.html', {
        'tour_form': tour_form,
    })
    
    
    
    
def tour_detail_view(request, tour_id):
    tour = get_object_or_404(Tour, pk=tour_id)
    images = tour.images.all()  

    company = tour.company_user
    context = {
        'tour': tour,
        'images': images,
        'company':company,
    }
    return render(request, 'website_templates/tourShowingCustomer.html', context)



def own_tour_detail_view(request, tour_id):
    tour = get_object_or_404(Tour, pk=tour_id)
    images = tour.images.all()  

    company = tour.company_user
    context = {
        'tour': tour,
        'images': images,
        'company':company,
    }
    return render(request, 'website_templates/tourShowingCompany.html', context) 



# def all_tours_view(request):

#     tours_list = Tour.objects.order_by('-created_at')

#     paginator = Paginator(tours_list, 4)
#     page_number = request.GET.get('page')  
#     page_obj = paginator.get_page(page_number)  

#     context = {
#         'page_obj': page_obj,  
#     }
#     return render(request, 'website_templates/.html', context)
