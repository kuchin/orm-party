from tortoise import Tortoise

await Tortoise.init(
    db_url="postgres://user:pass@localhost:5432/mydb",
    modules={"models": ["app.models"]},
)
