from tortoise.expressions import F

products = await Product.filter(
    sale_price__lt=F("original_price")
)
