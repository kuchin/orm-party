const rows = await db
  .selectFrom('posts as p')
  .innerJoin('users as u', 'u.id', 'p.author_id')
  .leftJoin('post_tags as pt', 'pt.post_id', 'p.id')
  .leftJoin('tags as t', 't.id', 'pt.tag_id')
  .select([
    'p.id as post_id',
    'p.title',
    'u.name as author_name',
    't.name as tag_name',
  ])
  .execute()
