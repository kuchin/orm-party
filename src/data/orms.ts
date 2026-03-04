export interface OrmDef {
  id: string;
  name: string;
  language: "typescript" | "python" | "sql";
  paradigm: "active-record" | "data-mapper" | "schema-first" | "query-builder" | "none";
  fileExtension: string;
  website: string;
  color: string;
}

export const orms: OrmDef[] = [
  {
    id: "sql",
    name: "SQL",
    language: "sql",
    paradigm: "none",
    fileExtension: "sql",
    website: "https://www.postgresql.org/docs/",
    color: "#336791",
  },
  {
    id: "django",
    name: "Django ORM",
    language: "python",
    paradigm: "active-record",
    fileExtension: "py",
    website: "https://docs.djangoproject.com/en/5.0/topics/db/",
    color: "#092E20",
  },
  {
    id: "sqlalchemy",
    name: "SQLAlchemy",
    language: "python",
    paradigm: "data-mapper",
    fileExtension: "py",
    website: "https://www.sqlalchemy.org",
    color: "#CE3F20",
  },
  {
    id: "sqlmodel",
    name: "SQLModel",
    language: "python",
    paradigm: "data-mapper",
    fileExtension: "py",
    website: "https://sqlmodel.tiangolo.com/",
    color: "#2596BE",
  },
  {
    id: "tortoise",
    name: "Tortoise ORM",
    language: "python",
    paradigm: "active-record",
    fileExtension: "py",
    website: "https://tortoise.github.io",
    color: "#4EA94B",
  },
  {
    id: "peewee",
    name: "Peewee",
    language: "python",
    paradigm: "active-record",
    fileExtension: "py",
    website: "https://docs.peewee-orm.com/",
    color: "#5B6C7D",
  },
  {
    id: "prisma",
    name: "Prisma",
    language: "typescript",
    paradigm: "schema-first",
    fileExtension: "ts",
    website: "https://www.prisma.io",
    color: "#2D3748",
  },
  {
    id: "drizzle",
    name: "Drizzle",
    language: "typescript",
    paradigm: "schema-first",
    fileExtension: "ts",
    website: "https://orm.drizzle.team",
    color: "#C5F74F",
  },
  {
    id: "kysely",
    name: "Kysely",
    language: "typescript",
    paradigm: "query-builder",
    fileExtension: "ts",
    website: "https://kysely.dev/",
    color: "#FFB020",
  },
  {
    id: "typeorm",
    name: "TypeORM",
    language: "typescript",
    paradigm: "data-mapper",
    fileExtension: "ts",
    website: "https://typeorm.io",
    color: "#FE0803",
  },
  {
    id: "mikroorm",
    name: "MikroORM",
    language: "typescript",
    paradigm: "data-mapper",
    fileExtension: "ts",
    website: "https://mikro-orm.io/",
    color: "#00B4CC",
  },
  {
    id: "sequelize",
    name: "Sequelize",
    language: "typescript",
    paradigm: "active-record",
    fileExtension: "ts",
    website: "https://sequelize.org/",
    color: "#52B0E7",
  },
];

export const ormMap = Object.fromEntries(orms.map((o) => [o.id, o]));
