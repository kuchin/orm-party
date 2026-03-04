import { literal } from "sequelize";

// model: metadata: { type: DataTypes.JSONB, defaultValue: {} }

// Store JSON
await User.update(
  { metadata: { theme: "dark", lang: "en" } },
  { where: { id: 1 } },
);

// Query JSON field
const users = await User.findAll({
  where: literal(`metadata->>'theme' = 'dark'`),
});

// Nested JSON
const users2 = await User.findAll({
  where: literal(`metadata->'address'->>'city' = 'NYC'`),
});
