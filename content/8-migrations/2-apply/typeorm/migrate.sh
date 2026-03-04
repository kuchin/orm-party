$ npx typeorm migration:run -d data-source.ts

# query: SELECT * FROM "migrations"
# 1 migration is pending
# query: ALTER TABLE "user" ADD "age" integer
# Migration AddUserAge1234567890 has been
#   executed successfully
