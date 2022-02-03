import Users from "../models/Users.js";

export const seedUsers = async () => {
  await Users.create(data);
};

const data = [];
