# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2018-02-18 22:40
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_differential_description'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Título da Categoria')),
                ('slug', models.SlugField(verbose_name='Atalho')),
            ],
            options={
                'verbose_name': 'Categoria',
                'verbose_name_plural': 'Categorias',
                'ordering': ['title'],
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Título do Produto')),
                ('slug', models.SlugField(verbose_name='Atalho')),
                ('image', models.ImageField(default='media/images/1.jpg', upload_to='product/images', verbose_name='Foto do Produto')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Criado em')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Atualizado em')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.Category')),
            ],
            options={
                'verbose_name': 'Produto',
                'verbose_name_plural': 'Produtos',
                'ordering': ['created_at'],
            },
        ),
        migrations.AlterField(
            model_name='differential',
            name='title',
            field=models.CharField(max_length=100, verbose_name='Título'),
        ),
    ]
