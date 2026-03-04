from django.db import models


class Employee(models.Model):
    name = models.CharField(max_length=255)
    manager = models.ForeignKey(
        "self",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="reports",
    )
