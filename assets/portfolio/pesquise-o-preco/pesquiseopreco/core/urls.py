from core import views
from django.conf.urls import url
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
	url(r'^$', views.index, name = 'index'),
	url(r'^pesquisa', views.search, name = 'search'),
	url(r'^produto', views.product_list, name = 'list'),
	url(r'^planilha', views.read_sheet, name = 'sheet'),
]

if settings.DEBUG:
	urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)