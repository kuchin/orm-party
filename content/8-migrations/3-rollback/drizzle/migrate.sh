# Drizzle has no built-in rollback.
# Options:

# 1. Revert schema and generate a new migration
#    (remove the "age" column from schema.ts)
$ npx drizzle-kit generate

# 2. Use drizzle-kit push for dev databases
$ npx drizzle-kit push
