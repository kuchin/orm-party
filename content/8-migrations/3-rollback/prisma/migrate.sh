# Prisma has no built-in rollback command.
# Options:

# 1. Revert schema and create a new migration
#    (remove the "age" field from schema.prisma)
$ npx prisma migrate dev --name revert_user_age

# 2. Manually run reverse SQL
$ npx prisma db execute --file rollback.sql
# rollback.sql:
#   ALTER TABLE "User" DROP COLUMN "age";
