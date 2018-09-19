from django.contrib import admin
from .models import Slideshow, Category, Product, Banner, Partner, Differential


class SlideshowAdmin(admin.ModelAdmin):

	list_display = ['title', 'slug']
	search_fields = ['title', 'slug']
	prepopulated_fields = {'slug': ['title']}  

class CategoryAdmin(admin.ModelAdmin):

	list_display = ['title', 'slug']
	search_fields = ['title', 'slug']
	prepopulated_fields = {'slug': ['title']}  

class ProductAdmin(admin.ModelAdmin):

	list_display = ['title', 'slug', 'category']
	search_fields = ['title', 'slug']
	prepopulated_fields = {'slug': ['title']}  

class BannerAdmin(admin.ModelAdmin):

	list_display = ['title', 'slug', 'created_at']
	search_fields = ['title', 'slug']
	prepopulated_fields = {'slug': ['title']}

class DifferentialAdmin(admin.ModelAdmin):

	list_display = ['title', 'slug']
	search_fields = ['title', 'slug']
	prepopulated_fields = {'slug': ['title']}  

class PartnerAdmin(admin.ModelAdmin):

	list_display = ['partner', 'slug']
	search_fields = ['partner', 'slug']
	prepopulated_fields = {'slug': ['partner']}

admin.site.register(Slideshow, SlideshowAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Banner, BannerAdmin)
admin.site.register(Differential, DifferentialAdmin)
admin.site.register(Partner, PartnerAdmin)
