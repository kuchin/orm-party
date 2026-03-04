const users = await userRepository.find({
  select: { name: true, email: true },
});
