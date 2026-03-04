export interface Scenario {
  slug: string;
  title: string;
}

export interface Category {
  slug: string;
  contentSlug: string;
  title: string;
  scenarios: Scenario[];
}

export const categories: Category[] = [
  {
    slug: "setup",
    contentSlug: "1-setup",
    title: "Setup",
    scenarios: [
      { slug: "1-connect", title: "Connect to Database" },
      { slug: "2-define-model", title: "Define a Model" },
      { slug: "3-field-types", title: "Define Field Types" },
      { slug: "4-nullable-defaults", title: "Nullable & Default Values" },
      { slug: "5-sync-schema", title: "Create / Sync Schema" },
    ],
  },
  {
    slug: "relations",
    contentSlug: "2-relations",
    title: "Relations",
    scenarios: [
      { slug: "1-one-to-many", title: "One-to-Many (ForeignKey)" },
      { slug: "2-many-to-many", title: "Many-to-Many" },
      { slug: "3-one-to-one", title: "One-to-One" },
      { slug: "4-self-referential", title: "Self-Referential" },
    ],
  },
  {
    slug: "crud",
    contentSlug: "3-crud",
    title: "CRUD",
    scenarios: [
      { slug: "1-insert-one", title: "Insert One" },
      { slug: "2-insert-many", title: "Insert Many (Bulk)" },
      { slug: "3-fetch-by-pk", title: "Fetch by Primary Key" },
      { slug: "4-fetch-first-match", title: "Fetch First Match" },
      { slug: "5-update-one", title: "Update One" },
      { slug: "6-update-many", title: "Update Many" },
      { slug: "7-upsert", title: "Upsert" },
      { slug: "8-delete-one", title: "Delete One" },
      { slug: "9-delete-many", title: "Delete Many" },
      { slug: "10-atomic-increment", title: "Atomic Increment" },
    ],
  },
  {
    slug: "querying",
    contentSlug: "4-querying",
    title: "Querying",
    scenarios: [
      { slug: "1-filter-where", title: "Filter (WHERE)" },
      { slug: "2-order-by", title: "Order By" },
      { slug: "3-select-fields", title: "Select Specific Fields" },
      { slug: "4-limit-offset", title: "Limit & Offset" },
      { slug: "5-count", title: "Count" },
      { slug: "6-and-or", title: "AND / OR Conditions" },
      { slug: "7-like-contains", title: "LIKE / Contains" },
      { slug: "8-comparison", title: "Comparison Operators" },
      { slug: "9-in", title: "IN Clause" },
      { slug: "10-distinct", title: "Distinct" },
      { slug: "11-exists", title: "Exists Check" },
      { slug: "12-compare-fields", title: "Compare Fields" },
    ],
  },
  {
    slug: "joins",
    contentSlug: "5-joins",
    title: "Joins",
    scenarios: [
      { slug: "1-fetch-related", title: "Fetch with Related (Eager Load)" },
      { slug: "2-filter-by-related", title: "Filter by Related Field" },
      { slug: "3-inner-join", title: "Inner Join" },
      { slug: "4-left-join", title: "Left Join" },
      { slug: "5-nested-relations", title: "Nested Relations (Deep Eager Load)" },
      { slug: "6-aggregate-group-by", title: "Aggregate (GROUP BY)" },
      { slug: "7-count-related", title: "Count Related (HAVING)" },
    ],
  },
  {
    slug: "aggregation",
    contentSlug: "6-aggregation",
    title: "Aggregation",
    scenarios: [
      { slug: "1-sum", title: "SUM" },
      { slug: "2-avg", title: "AVG" },
      { slug: "3-min-max", title: "MIN / MAX" },
      { slug: "4-group-by", title: "GROUP BY" },
      { slug: "5-having", title: "HAVING" },
      { slug: "6-subquery", title: "Subquery" },
    ],
  },
  {
    slug: "transactions",
    contentSlug: "7-transactions",
    title: "Transactions",
    scenarios: [
      { slug: "1-basic", title: "Basic Transaction" },
      { slug: "2-rollback", title: "Rollback on Error" },
      { slug: "3-savepoint", title: "Savepoint / Nested" },
    ],
  },
  {
    slug: "migrations",
    contentSlug: "8-migrations",
    title: "Migrations",
    scenarios: [
      { slug: "1-generate", title: "Generate Migration" },
      { slug: "2-apply", title: "Apply Migration" },
      { slug: "3-rollback", title: "Rollback Migration" },
      { slug: "4-status", title: "Migration Status" },
    ],
  },
  {
    slug: "raw-queries",
    contentSlug: "9-raw-queries",
    title: "Raw Queries",
    scenarios: [
      { slug: "1-execute-raw", title: "Execute Raw SQL" },
      { slug: "2-parameterized", title: "Raw SQL with Parameters" },
      { slug: "3-raw-returning-models", title: "Raw SQL Returning Models" },
    ],
  },
  {
    slug: "advanced",
    contentSlug: "10-advanced",
    title: "Advanced",
    scenarios: [
      { slug: "1-window-functions", title: "Window Functions" },
      { slug: "2-cte", title: "Common Table Expressions (CTE)" },
      { slug: "3-json-fields", title: "JSON Field Queries" },
      { slug: "4-full-text-search", title: "Full-Text Search" },
      { slug: "5-database-views", title: "Database Views" },
    ],
  },
];

export function categoryUrl(slug: string): string {
  return slug === categories[0].slug ? "/" : `/${slug}`;
}
