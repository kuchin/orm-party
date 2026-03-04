# Revert last applied migration
$ npx typeorm migration:revert -d data-source.ts

# query: SELECT * FROM "migrations"
# Reverting AddUserAge1234567890
# query: ALTER TABLE "user" DROP COLUMN "age"
# Migration AddUserAge1234567890 has been
#   reverted successfully
# Executes the down() method of the migration
