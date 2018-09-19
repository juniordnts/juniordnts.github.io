from django.shortcuts import render, redirect
from core.models import Slideshow, Category, Product, Banner, Differential, Partner
from django.http import JsonResponse
from django import forms
import django_excel as excel
from django.http import HttpResponseBadRequest, HttpResponse

#Planilha do Excel
import pyexcel as pe


"""
------------------------------------------
        View para Página Inicial
------------------------------------------
"""

def index(request): 
  	slides = Slideshow.objects.all()
  	banners = Banner.objects.all()
  	differentials = Differential.objects.all()
  	partners = Partner.objects.all()
  	categories = Category.objects.all()
  	products = Product.objects.all()

  	context = {
		'slides': slides,
		'banners': banners,
		'differentials': differentials,
		'partners': partners,
		'categories': categories,
		'products': products,
  	}

  	return render(request, "index.html", context)


"""
------------------------------------------
        View para Página de Pesquisa
------------------------------------------
"""

def search(request): 
	categories = Category.objects.all()
	products = Product.objects.all()
	
	context = {
    	'categories': categories,
    	'products': products,
	}
	
	return render(request, "pesquisa.html", context)

"""
------------------------------------------
        View para Página Inicial
------------------------------------------
"""

def product_list(request): 
	categories = Category.objects.all()
	products = Product.objects.all()

	context = {
    	'categories': categories,
    	'products': products,
	}
	
	return render(request, "produto.html", context)


"""
------------------------------------------
        View para ler planilha
------------------------------------------
"""

def read_sheet(request):
	campos =  pe.iget_records(file_name="Produtos.xlsx")
	context = {'campos': campos}
	for campo in campos:
		#print("ID: %i | Nome: %s | Preço: %d" % (campo['Código'], campo['Nome Produto'], campo['Venda ']))
		context['id'] = campo['Código']
		context['title'] = campo['Nome Produto']
		context['price'] = campo['Venda ']
		print(context['title'] + " --- " + "PREÇO: " + str(context['price']))
	return render(request, "produto.html", context)