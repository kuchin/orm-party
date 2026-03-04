# Revert last applied migration
$ npx sequelize-cli db:migrate:undo

# == 20240115000000-add-user-age: reverted

# Revert down to a specific migration
$ npx sequelize-cli db:migrate:undo:all --to 20240101000000-initial.js
