import Orders from "../models/Orders.js";

export const seedOrders = async () => {
  await Orders.create(data);
};

const data = [
  {
    userId: "61dac49de1efa8606d315351",
    productType: "A1",
    strollerId: "61dabfd1820f9c7845dabcd6",
    price: 10,
  },
];
