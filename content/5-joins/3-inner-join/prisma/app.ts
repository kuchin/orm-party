// Prisma doesn't expose raw joins;
// use include to fetch related data
const posts = await prisma.post.findMany({
  include: { author: true },
});

// Access joined data
posts.forEach((p) => console.log(p.author.name, p.title));
