# Generated by Django 2.1.7 on 2019-02-17 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='comments',
            options={'ordering': ['timestamp'], 'verbose_name_plural': 'Comments'},
        ),
        migrations.RenameField(
            model_name='post',
            old_name='published',
            new_name='is_published',
        ),
        migrations.AlterField(
            model_name='author',
            name='name',
            field=models.CharField(max_length=120, unique=True),
        ),
    ]
