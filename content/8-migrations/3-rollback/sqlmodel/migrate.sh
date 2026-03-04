# Rollback last migration
$ alembic downgrade -1

# INFO [alembic.runtime.migration]
#   Running downgrade ae10 -> 5ba1, add user age
# Executes the downgrade() function:
#   op.drop_column("users", "age")

# Rollback to a specific revision
$ alembic downgrade ae1027a6acf
