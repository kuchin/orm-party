import { In, Not } from "typeorm";

const users = await userRepository.findBy({
  name: In(["Alice", "Bob", "Charlie"]),
});

// NOT IN
const users2 = await userRepository.findBy({
  name: Not(In(["Alice", "Bob"])),
});
