import { Like, ILike } from "typeorm";

// Contains
const users = await userRepository.findBy({
  name: Like("%ali%"),
});

// Starts with
const users2 = await userRepository.findBy({
  name: Like("Ali%"),
});

// Case-insensitive
const users3 = await userRepository.findBy({
  name: ILike("%ali%"),
});
