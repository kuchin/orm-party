// preview: fullTextSearch
const articles = await prisma.article.findMany({
  where: {
    title: { search: "database & optimization" },
  },
});
