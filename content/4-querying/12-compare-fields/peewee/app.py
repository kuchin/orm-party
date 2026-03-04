products = Product.select().where(
    Product.sale_price < Product.original_price
)
