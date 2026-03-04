// Find with relations
const user = await userRepository.findOne({
  where: { id: 1 },
  relations: { posts: true },
});

// Find posts with author
const posts = await postRepository.find({
  relations: { author: true },
});
