from django.shortcuts import render
from .models import Home, About , Profile , Category , Skills , Portfolio
def index(request):

    # HomeProfile

    home = Home.objects.latest('updated')

    # About

    about = About.objects.latest('updated')
    profiles = Profile.objects.filter(about=about)

    # Skills

    categories = Category.objects.all()

    # Portoflio

    portfolios = Portfolio.objects.all()

    context = {
        'home' : home,
        'about': about,
        'profiles' : profiles,
        'categories': categories,
        'portfolios' : portfolios,
    }

    return render(request, 'index.html',context)
