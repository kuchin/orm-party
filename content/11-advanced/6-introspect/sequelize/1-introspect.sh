# No built-in introspection — sequelize-auto is the most popular tool
$ npm install sequelize-auto
$ npx sequelize-auto \
    -h localhost -d mydb \
    -u user -x pass \
    --dialect postgres -l ts
