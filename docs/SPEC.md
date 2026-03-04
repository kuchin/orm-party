i want to build a similiar comparison as https://component-party.dev but for ORMs (popular in python and typescript).
---

## 🔬 What Component Party actually is (first principles)

Strip the UI away and it's a **canonical snippet registry** organized as a two-dimensional matrix:

```
axis 1: scenarios (rows)    — ordered by learning curve
axis 2: frameworks (cols)   — selected by user
cell:   the idiomatic code  — never optimized, always clear
```

The genius is in the **editorial choices**, not the tech:

- Scenarios are **behaviors**, not APIs. Not "how to use `useState`" but "how to declare reactive state." The question is always what you're *trying to do*, never which function to call.
- Only **one canonical answer per cell** — no "here's 3 ways to do it." Forces maintainers to pick the idiomatic path.
- **Missing = information.** If a framework can't do something, showing a blank is as useful as showing code.
- Content lives in Markdown → community can contribute without touching the app.
- The site has **zero business logic** — it's a viewer for structured content. Extremely low surface area.

---

## 🔀 What changes when you port this to ORMs

This is where it gets hairy. Five structural differences that demand fresh design decisions:

### 1. You're crossing a language boundary
Component Party compares implementations of the same runtime primitive (a DOM component). Every framework is JS/TS, runs in a browser, produces the same artifact.

ORMs in Python and TypeScript are doing the **same database operation**, expressed in different language paradigms. This is actually *more* compelling for side-by-side comparison — the underlying SQL is identical, only the abstraction layer differs. But it adds complexity: do you group by language or mix them?

**Recommendation:** Mix them, with a language badge (🐍 / 🔷) on each snippet. The cross-language view is the main value — a Django dev evaluating Prisma wants to see both in the same pane.

### 2. Async is a first-class axis, not a note
In UI frameworks, async is just "fetch data." In ORMs, sync vs async is an **architectural decision** that shapes everything. Django ORM is sync-first (with bolt-on async). Tortoise ORM is async-first. SQLAlchemy 2.x supports both but with different session objects. Drizzle doesn't care — it's just `await`.

This means every snippet might need a variant. Or you add a global filter: "show async" / "show sync."

### 3. The pattern taxonomy is fundamentally different
Component Party scenarios map to UI lifecycle moments: mount, update, slot, event. ORM scenarios map to **database access patterns**. The categories need to be grounded in what devs actually do day-to-day:

```
Setup           → connect, define models, field types, nullables, sync schema
Relations       → one-to-many, many-to-many, one-to-one, self-referential
CRUD            → insert, fetch, update, upsert, delete — single & bulk
Querying        → filter, sort, paginate, select, distinct, exists, operators
Joins           → eager load, inner/left join, nested, aggregate, having
Aggregation     → sum, avg, min/max, group by, having, subquery
Transactions    → basic tx, rollback, savepoint
Migrations      → generate, apply, rollback, status
Raw Queries     → execute raw SQL, parameterized, raw → model mapping
Advanced        → window functions, CTEs, JSON fields, full-text search, views
Performance     → eager/lazy loading, N+1, batch queries, connection pooling
```

### 4. Generated SQL is your killer feature
Component Party has no equivalent of this — the output of a UI framework is visual, you can't show it as text. But with ORMs, **the generated SQL is the whole debate.** Does Drizzle generate a clean join or a subquery? Does Django ORM produce an N+1 by default?

Showing `// Generated SQL →` alongside each snippet transforms the site from a syntax reference into a **correctness and performance teaching tool.** This is the thing that no existing ORM comparison does well.

### 5. Active Record vs Data Mapper is a conceptual chasm
Django, Peewee, Sequelize = Active Record. Your model *is* the query interface. `User.objects.filter(...)`.

SQLAlchemy, TypeORM (Data Mapper mode), MikroORM = Data Mapper. You have separate `Session`/`EntityManager` objects. Models are just data.

Prisma = neither — it's code-generated, schema-first, no classes at runtime.

This means some scenarios simply don't translate 1:1. You can't show "define a repository" for Django ORM because the concept doesn't exist. The site needs to handle **structural N/A** gracefully — not as a missing snippet but as an explicit "this pattern doesn't apply to this ORM's paradigm."

---

## 🎯 ORMs to include (my read on the field)

**Python:**
- SQLAlchemy 2.x (ORM layer) — the power tool, Data Mapper
- Django ORM — the most used, Active Record, tight framework coupling
- Tortoise ORM — async-first, Django-inspired syntax, standalone
- SQLModel — thin wrapper over SQLAlchemy + Pydantic, FastAPI crowd
- Peewee — small, expressive, Active Record, zero magic

**TypeScript:**
- Prisma — schema-first, code-gen, the current default for new TS projects
- Drizzle — SQL-like syntax, type-safe, no code-gen, rising fast
- TypeORM — decorator-heavy, the "old guard," Active Record + Data Mapper modes
- MikroORM — Data Mapper, Identity Map, closest to Hibernate conceptually
- Sequelize — the legacy default, Active Record, widely used in older codebases
- Kysely — technically a query builder not an ORM, but worth including as the "no-ORM ORM" option that many devs are switching to

**Intentional omissions:** Mongoose (MongoDB — different paradigm), Knex (raw query builder, no models), Objection.js (Knex wrapper, low momentum).

---

## 🏗️ Content architecture (how scenarios map to snippets)

The hardest design problem. Structure with ~59 scenarios across 10 categories:

```
01 · Setup
    1.1  Connect to database
    1.2  Define a model
    1.3  Define field types (string, int, bool, datetime, JSON)
    1.4  Nullable & default values
    1.5  Create / sync schema

02 · Relations
    2.1  One-to-many (ForeignKey)
    2.2  Many-to-many (through table)
    2.3  One-to-one
    2.4  Self-referential relation

03 · CRUD
    3.1  Insert one
    3.2  Insert many (bulk)
    3.3  Fetch by primary key
    3.4  Fetch first match
    3.5  Update one
    3.6  Update many
    3.7  Upsert
    3.8  Delete one
    3.9  Delete many

04 · Querying
    4.1  Filter (WHERE equals)
    4.2  Order by
    4.3  Select specific fields
    4.4  Limit & offset
    4.5  Count
    4.6  AND / OR conditions
    4.7  LIKE / contains
    4.8  Comparison operators (gt, lt, gte, lte)
    4.9  IN clause
    4.10 Distinct
    4.11 Exists check

05 · Joins & Eager Loading
    5.1  Fetch with related (eager load)
    5.2  Filter by related field
    5.3  Inner join
    5.4  Left join
    5.5  Nested relations (nested eager load)
    5.6  Aggregate (GROUP BY on join)
    5.7  Count related (HAVING)
         Note: Joins covers eager loading / N+1 prevention
         in context — 5.1 shows prefetch/include/joinedload,
         5.5 shows nested eager load. No separate Performance
         category needed; these patterns are best understood
         alongside the joins that produce them.

06 · Aggregation
    6.1  SUM
    6.2  AVG
    6.3  MIN / MAX
    6.4  GROUP BY
    6.5  HAVING
    6.6  Subquery
         Note: GROUP BY and HAVING appear in both Joins (5.6, 5.7)
         and Aggregation (6.4, 6.5). Joins shows them in
         join context (count related rows, aggregate joined data).
         Aggregation shows standalone aggregate queries on a
         single table. Different use cases, no real overlap.

07 · Transactions
    7.1  Basic transaction
    7.2  Rollback on error
    7.3  Savepoint / nested

08 · Migrations
    8.1  Generate migration
    8.2  Apply migration
    8.3  Rollback migration
    8.4  Migration status

09 · Raw Queries
    9.1  Execute raw SQL
         — run arbitrary SQL, get plain rows back
    9.2  Raw SQL with parameters
         — parameterized queries to prevent SQL injection
    9.3  Raw SQL returning models
         — map raw query results back to ORM model instances

10 · Advanced
    10.1 Window functions (ROW_NUMBER, RANK, etc.)
         — analytics queries that ORMs handle differently
    10.2 Common Table Expressions (CTEs)
         — WITH clauses for readable complex queries
    10.3 JSON field queries
         — PostgreSQL JSONB: read, write, filter on nested JSON
    10.4 Full-text search
         — tsvector / plainto_tsquery or ORM-level search APIs
    10.5 Database views
         — define and query from database views
```

---

## 🤔 Key open design decisions you'll need to make

**a) Cross-language mixing strategy** — Do you have a single ORM list (all 11 ORMs), or do you have separate Python / TS tabs with a unified scenario list? I'd lean toward unified scenarios + filterable by language, because the cross-language insight is the main draw.

**b) Generated SQL** — Do you show it as a third panel per snippet? I'd make it toggleable, off by default to reduce noise, but it's a meaningful differentiator.

**c) Paradigm labeling** — Label each ORM with its pattern (Active Record / Data Mapper / Schema-first) so the structural N/A situations make sense.

**d) Database backend** — Stick to PostgreSQL as the canonical DB. Show DB-specific variants (JSONB, arrays) as optional extensions rather than part of the main scenarios.

**e) Name / domain** — "ORM Party" is the obvious pick but a bit derivative. "queryparty.dev", "ormbook.dev", "ormref.dev" — worth thinking about.
