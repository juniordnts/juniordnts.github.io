from django.db import models
from fontawesome.fields import IconField

"""
------------------------------------
  MODELO PARA SLIDESHOW INICIAL
------------------------------------
"""  
    
class Slideshow (models.Model):
	title = models.CharField('Título do Slideshow', max_length=100)
	slug = models.SlugField('Atalho')
	number = models.IntegerField('Número do slide (Ex.: 1, 2)')
	image = models.ImageField(upload_to='slideshow/images', verbose_name='Imagem', default='media/images/1.jpg')
	prepopulated_fields = {'slug': ['title']}

	def __str__(self):
		return self.title

	class Meta:
		verbose_name = 'Slideshow'
		verbose_name_plural = 'Slideshows'
		ordering = ['title']



"""
------------------------------------
    MODELO PARA OS CATEGORIAS
------------------------------------
"""  

class Category (models.Model):
	title = models.CharField('Título da Categoria', max_length=100)
	slug = models.SlugField('Atalho')
	icon = IconField('Ícone', null=True, blank=True)
	prepopulated_fields = {'slug': ['title']}

	def __str__(self):
		return self.title

	class Meta:
		verbose_name = 'Categoria'
		verbose_name_plural = 'Categorias'
		ordering = ['title']


"""
------------------------------------
      MODELO PARA PRODUTOS
------------------------------------
"""

class Product (models.Model):

	title = models.CharField('Título do Produto', max_length=300)
	slug = models.SlugField('Atalho')
	code = models.CharField('Código do Produto', max_length=300)
	category = models.ForeignKey(Category, default='Outros')
	description = models.TextField('Descrição', null=True, blank=True)
	price = models.DecimalField('Preço', max_digits=9, decimal_places=2, default=0.00)
	image = models.ImageField(upload_to='product/images', verbose_name='Foto do Produto', default='media/images/1.jpg')
	location = models.CharField('Link da localização', max_length=500, default='')
	created_at = models.DateTimeField('Criado em', auto_now_add = True)
	updated_at = models.DateTimeField('Atualizado em', auto_now = True)
	prepopulated_fields = {'slug': ['title']}

	def __str__(self):
		return self.title

	class Meta:
		verbose_name = 'Produto'
		verbose_name_plural = 'Produtos'
		ordering = ['created_at']    

    

"""
------------------------------------
      MODELO PARA OS BANNERS
------------------------------------
"""

class Banner (models.Model):
	title = models.CharField('Título do Banner', max_length=100)
	slug = models.SlugField('Atalho')
	image = models.ImageField(upload_to='banner/images', verbose_name='Foto do Banner', default='media/images/1.jpg')
	created_at = models.DateTimeField('Criado em', auto_now_add = True)
	updated_at = models.DateTimeField('Atualizado em', auto_now = True)
	prepopulated_fields = {'slug': ['title']}

	def __str__(self):
		return self.title

	class Meta:
		verbose_name = 'Banner'
		verbose_name_plural = 'Banners'
		ordering = ['created_at']

    
"""
------------------------------------
    MODELO PARA OS PARCEIROS
------------------------------------
"""    
    
class Partner (models.Model):
	
	partner = models.CharField('Parceiro', max_length=100)
	slug = models.SlugField('Atalho')
	image = models.ImageField(upload_to='partner/images', verbose_name='Logo do Parceiro', default='media/images/1.jpg')
	prepopulated_fields = {'slug': ['partner']}

	def __str__(self):
		return self.partner

	class Meta:
		verbose_name = 'Parceiro'
		verbose_name_plural = 'Parceiros'
		ordering = ['partner']
    
"""
------------------------------------
    MODELO PARA OS DIFERENCIAIS
------------------------------------
"""    

class Differential (models.Model):
	title = models.CharField('Título', max_length=100)
	slug = models.SlugField('Atalho')
	description = models.TextField('Descrição', null=True, blank=True)
	image = models.ImageField(upload_to='differential/images', verbose_name='Ícone do Diferencial', default='media/images/1.jpg')
	prepopulated_fields = {'slug': ['title']}

	def __str__(self):
		return self.title

	class Meta:
		verbose_name = 'Diferencial'
		verbose_name_plural = 'Diferenciais'
		ordering = ['title']
