from django.conf.urls import url
from InventoryAPP import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^item$', views.itemApi),
    url(r'^item/([0-9]+)$', views.itemApi),

    url(r'^stock$', views.stockApi),
    url(r'^stock/([0-9]+)$', views.stockApi)

]
