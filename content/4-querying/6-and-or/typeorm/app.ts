import { Like } from "typeorm";

// AND
const users = await userRepository.findBy({
  name: "Alice",
  email: Like("%@example.com"),
});

// OR (array of conditions)
const users2 = await userRepository.findBy([
  { name: "Alice" },
  { name: "Bob" },
]);
