# ORM Party

Side-by-side comparison of ORM and query builder syntax across languages and frameworks. See how the same database operation looks in different ORMs.

Inspired by [component-party.dev](https://component-party.dev).

## ORMs Covered

**Python:** Django ORM, SQLAlchemy, SQLModel, Tortoise ORM, Peewee

**TypeScript:** Prisma, Drizzle, Kysely, TypeORM, MikroORM, Sequelize

All examples use PostgreSQL and show idiomatic usage for each ORM.

## Categories

| Category | Scenarios |
| :--- | :--- |
| Setup | Connect, Define Model, Field Types, Nullable & Defaults, Sync Schema |
| Relations | One-to-Many, Many-to-Many, One-to-One, Self-Referential |
| CRUD | Insert, Bulk Insert, Fetch, Update, Upsert, Delete, Atomic Increment |
| Querying | Filter, Order By, Select Fields, Limit/Offset, Count, AND/OR, LIKE, Comparison, IN, Distinct, Exists, Compare Fields |
| Joins | Eager Load, Filter by Related, Inner Join, Left Join, Nested Relations, Aggregate, Count Related |
| Aggregation | SUM, AVG, MIN/MAX, GROUP BY, HAVING, Subquery |
| Transactions | Basic, Rollback, Savepoint |
| Migrations | Generate, Apply, Rollback, Status |
| Raw Queries | Execute Raw, Parameterized, Raw Returning Models |
| Advanced | Window Functions, CTE, JSON Fields, Full-Text Search, Database Views |

## Tech Stack

- [Astro](https://astro.build) (static site generation)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Shiki](https://shiki.style) (syntax highlighting)

## Development

```sh
bun install
bun dev
```

## Build

```sh
bun build
```

## Project Structure

```
content/              # ORM code snippets organized by category/scenario/orm
src/
  components/         # Astro components (CategoryPage, OrmSelector, etc.)
  data/               # ORM and category definitions
  layouts/            # Page layout
  pages/              # Routes (index, about, each category)
```

## Contributing

To add a new ORM, create a directory for it under each scenario in `content/` and register it in `src/data/orms.ts`.

## Author

Built by [Dima Kuchin](https://github.com/kuchin) at [Mirable](https://mirable.io).
