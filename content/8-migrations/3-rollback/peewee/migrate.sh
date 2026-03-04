# Rollback by running reverse migration
$ python migrations/20240115_add_user_age.py --downgrade

# Executes downgrade() and drops users.age
