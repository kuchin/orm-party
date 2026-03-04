const posts = await postRepository.find({
  relations: {
    author: true,
    tags: true,
  },
});
