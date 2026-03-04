await userRepository.upsert(
  { name: "Alice Smith", email: "alice@example.com" },
  ["email"],
);
