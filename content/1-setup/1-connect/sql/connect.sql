-- via connection string
psql "postgresql://user:password@localhost:5432/mydb"

-- via parameters
psql -h localhost -p 5432 -U user -d mydb
