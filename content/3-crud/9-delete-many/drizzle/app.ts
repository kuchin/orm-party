await db.delete(users)
  .where(like(users.email, "%@old-domain.com"));
