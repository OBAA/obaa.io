from django.db import models
from django.db.models.signals import post_save


class ContactMessage(models.Model):
    full_name = models.CharField(max_length=120, )
    email = models.EmailField(unique=False)
    message = models.TextField(max_length=2000)
    delivered = models.BooleanField(default=False)

    # objects = ...
    def __str__(self):
        return "[ " + self.full_name + " <" + self.email + "> ]"

    # class Meta:
    #     verbose_name_plural = "Contact Messages"


def post_save_email_notification(sender, instance, *args, **kwargs):
    if not instance.delivered:
        # send via email
        # Put in place later on
        return


post_save.connect(post_save_email_notification, sender=ContactMessage)
