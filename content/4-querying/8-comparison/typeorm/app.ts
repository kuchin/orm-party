import { MoreThan, LessThanOrEqual, Not, Between } from "typeorm";

// Greater than
const users = await userRepository.findBy({
  createdAt: MoreThan(new Date("2024-01-01")),
});

// Less than or equal
const users2 = await userRepository.findBy({
  id: LessThanOrEqual(100),
});

// Not equal
const users3 = await userRepository.findBy({
  name: Not("Alice"),
});

// Between
const users4 = await userRepository.findBy({
  createdAt: Between(new Date("2024-01-01"), new Date("2024-12-31")),
});
