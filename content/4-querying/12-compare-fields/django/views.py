from django.db.models import F

products = Product.objects.filter(
    sale_price__lt=F("original_price")
)
