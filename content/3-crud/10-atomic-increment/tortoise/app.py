from tortoise.expressions import F

await User.filter(id=1).update(
    views=F("views") + 1
)
