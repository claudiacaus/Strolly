import Features from "../models/Features.js";
export const seedfeatures = async () => {
  await Features.create(data);
};
const data = [
  {
    _id: "fet1",
    title: "Rain covers",
    description:
      "Set of two. Offers protection against rain and other weather elements.",
  },
  {
    _id: "fet2",
    title: "Carry handles",
    description:
      "Set of two carry handles to create an extra layer of protection for your child and make it easy for you to carry and transport the seat or bassinet.",
  },
  {
    _id: "fet3",
    title: "Chassis with wheels",
    description:
      "The base structure and hardware you'll need to assemble your stroller. Includes the chassis and full set of wheels.",
  },
  {
    _id: "fet4",
    title: "Side luggage bag and underseat basket",
    description:
      "Additional storage during your strolls. The side luggages bag comes with a zipper on top, keeping your essentials protected.",
  },
];
