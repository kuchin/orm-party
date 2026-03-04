from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    quantity = models.IntegerField()
    in_stock = models.BooleanField()
    release_date = models.DateTimeField()
    tags = models.JSONField()
