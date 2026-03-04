await userRepository
  .createQueryBuilder()
  .delete()
  .from(User)
  .where("email LIKE :pattern", { pattern: "%@old-domain.com" })
  .execute();
