from django import template
from website.models import Tour

register = template.Library()

@register.inclusion_tag('website_templates/listCompanies.html')
def show_latest_tours(limit=3):
    latest_tours = Tour.objects.order_by('-created_at')[:limit]
    return {'tours': latest_tours}

# @register.inclusion_tag('website_templates/tour_list.html')
# def show_most_visited_tours(limit=3):
#     most_visited_tours = Tour.objects.order_by('-views')[:limit]
#     return {'tours': most_visited_tours}
