# Generated by Django 2.1.7 on 2019-04-02 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='level',
            field=models.CharField(choices=[('Administrator', 'admin'), ('Staff', 'staff'), ('Member', 'member')], default='member', max_length=120),
        ),
    ]
