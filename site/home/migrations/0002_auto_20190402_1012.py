# Generated by Django 2.1.7 on 2019-04-02 09:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactme',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]