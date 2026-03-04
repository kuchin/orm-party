import { literal } from "sequelize";

const results = await Article.findAll({
  where: literal(`
    to_tsvector('english', title || ' ' || body)
    @@ plainto_tsquery('english', 'database optimization')
  `),
});
