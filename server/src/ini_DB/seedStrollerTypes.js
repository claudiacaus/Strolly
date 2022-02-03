import StrollerTypes from "../models/strollerTypes.js";

export const seedStrollerTypes = async () => {
  await StrollerTypes.create(data);
};

const data = [
  {
    _id: "A1",
    type: "Single and double",
    description:
      "single and double stroller is a single stroller that converts to a double stroller in only three clicks. Are you starting your family, but thinking of having more children in the future? This stroller is designed for you.",
    topFeatures: [
      "Suitable from birth to toddler, and converts into a stroller for two (includes a bassinet and a seat)",
      "Side luggage basket with a carry handle for even more storage—just grab and go!",
      "Fits through most doorways even when in the double stroller configuration",
      "Puncture proof foam wheels for a smooth and comfortable ride on any terrain",
      "Two-wheel position for an easier ride through mud, sand or snow",
    ],
    images: {
      live_img:
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862031/A/a1live_qo9ab3.jpg",
      stroller_imgs: [
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862030/A/a1001_n2vqyq.jpg",
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862031/A/a1002_ywbu44.jpg",
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862031/A/a1003_cc6isj.jpg",
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862031/A/a1004_k4pezw.jpg",
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862031/A/a1005_ohvyxe.jpg",
      ],
    },
    specifications: [
      {
        title: "Stroller weight",
        description: "13.9 kg/30.64 lbs",
      },
      {
        title: "Age range",
        description: "0 months – 4 years",
      },
      {
        title: "Front wheels",
        description: "25 cm/10 in",
      },
      {
        title: "Rear wheels",
        description: "30 cm/12 in",
      },
      {
        title: "On the seat",
        description: "22 kg/ 48.5 lbs (per seat)",
      },
      {
        title: "In the underseat basket",
        description: "10 kg/35 liters/22 lbs",
      },
      {
        title: "Side luggage bag",
        description: "10 kg/22 lbs",
      },
    ],
    features: ["fet1", "fet4"],
    price: {
      perMin: 0.075,
    },
    link: "https://www.bugaboo.com/nl-en/bugaboo-donkey-3-mono-seat-and-bassinet-stroller-classic-collection-dark-navy-sun-canopy-classic-collection-dark-navy-fabrics-aluminium-base-PV001667.html",
  },
  {
    _id: "A2",
    type: "Single speed Travel",
    description:
      "Single speed Travel is our comfort city stroller, the best companion to let you discover the city together with your family. Whether you’re going for a walk in the park, groceries or need to get in and out of public transport, it offers the best of both worlds: true comfort in a compact size.",
    features: ["fet2", "fet1"],
    topFeatures: [
      "Bigger than average, puncture proof wheels make it easy to push and handle on city streets.",
      "Advanced suspension gives a smooth ride so your child can nap without being disturbed.",
      "Compact design allows you to easily navigate busy sidewalks and get into public transport without needing to fold it.",
      "The ergonomic seat with extra ventilation helps regulate your child's body temperature",
      "Compact fold and integrated self-stand makes it easy to store - out of the way but never out of reach.",
    ],
    images: {
      live_img:
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862031/A/a2live_m7d7iv.jpg",
      stroller_imgs: [
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862031/A/a2001_ug1qie.jpg",
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862031/A/a2002_okbfqw.jpg",
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862031/A/a2003_wvzkb7.jpg",
      ],
    },
    specifications: [
      {
        title: "Stroller weight",
        description: "9.4 kg/20.8 lbs",
      },
      {
        title: "Age range",
        description: "0 months – 4 years",
      },
      {
        title: "Front wheels",
        description: "17.8 cm/7 in",
      },
      {
        title: "Rear wheels",
        description: "17.8 cm/7 in",
      },
      {
        title: "On the seat",
        description:
          "22 kg/50 lbs (facing world) & 15 kg/33 lbs (facing parent)",
      },
      {
        title: "In the underseat basket",
        description: "4 kg/8.8 lbs/22 liters/5.8 gallons",
      },
    ],
    price: {
      perMin: 0.05,
    },
    link: "https://www.bugaboo.com/nl-en/flex-products/bugaboo-bee-6-seat-stroller-lemon-yellow-sun-canopy-black-fabrics-black-base-PV002977.html",
  },
  {
    _id: "B1",
    type: "Twins bed and seat",
    description:
      "Featuring independent reversible and reclinable seats,Twins bed and seat stroller offers equal comfort for your children. The side by side composition allows your twins to connect and explore together, especially when seats are placed facing each other.",
    features: ["fet2", "fet1"],
    topFeatures: [
      "Suitable for your twins from birth to toddler (includes two bassinets and two seats)",
      "Fits through most doorways when in the twin stroller configuration",
      "Puncture proof foam wheels for a smooth and comfortable ride on any terrain",
      "Two-wheel position for an easier ride through mud, sand or snow",
      "Can carry your twins and an older sibiling when paired with the comfort wheeled board",
    ],
    images: {
      live_img:
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862031/B/b1live_w1t4gd.jpg",
      stroller_imgs: [
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862031/B/b1001_fs74jb.jpg",
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862031/B/b1002_vmh9zt.jpg",
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862031/B/b1003_byprfh.jpg",
      ],
    },
    specifications: [
      {
        title: "Stroller weight",
        description: "15 kg/33 lbs",
      },
      {
        title: "Age range",
        description: "0 months – 4 years",
      },
      {
        title: "Front wheels",
        description: "25 cm/10 in",
      },
      {
        title: "Rear wheels",
        description: "30 cm/12 in",
      },
      {
        title: "On the seat",
        description: "22 kg/ 48.5 lbs (per seat)",
      },
      {
        title: "In the underseat basket",
        description: "10 kg/35 liters/22 lbs",
      },
    ],
    price: {
      perMin: 0.1,
    },
    link: "https://www.bugaboo.com/nl-en/bugaboo-donkey-3-twin-seat-and-bassinet-stroller-classic-collection-dark-navy-sun-canopy-classic-collection-dark-navy-fabrics-aluminium-base-PV001728.html",
  },
  {
    _id: "B2",
    type: "2 kids, bed and seat",
    description:
      "The 2 kids, bed and seat is a double stroller that can also be converted into a single stroller in only three clicks. Are you starting your family, but thinking of having more children in the future? This stroller is designed for you.",
    features: ["fet1", "fet3"],
    topFeatures: [
      "Side by side double stroller",
      "Fits through most doorways when in the double stroller configuration",
      "Puncture proof foam wheels for a smooth and comfortable ride on any terrain",
      "Two-wheel position for an easier ride through mud, sand or snow",
      "Convenient one-piece self-standing fold",
    ],
    images: {
      live_img:
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862032/B/b2live_fwjwr7.webp",
      stroller_imgs: [
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862031/B/b2001_fylh9u.jpg",
        "https://res.cloudinary.com/drw1mbjuv/image/upload/v1640862031/B/b2002_bvs844.jpg",
      ],
    },
    specifications: [
      {
        title: "Stroller weight",
        description: "15 kg/33 lbs",
      },
      {
        title: "Age range",
        description: "0 months – 4 years",
      },
      {
        title: "Front wheels",
        description: "25 cm/10 in",
      },
      {
        title: "Rear wheels",
        description: "30 cm/12 in",
      },
      {
        title: "On the seat",
        description: "22 kg/ 48.5 lbs (per seat)",
      },
      {
        title: "In the underseat basket",
        description: "10 kg/35 liters/22 lbs",
      },
      {
        title: "Side luggage bag",
        description: "10 kg/22 lbs",
      },
    ],
    price: {
      perMin: 0.1,
    },
    link: "https://www.bugaboo.com/nl-en/bugaboo-donkey-3-duo-seat-and-bassinet-stroller-mineral-washed-black-sun-canopy-mineral-washed-black-fabrics-black-base-PV001699.html",
  },
];
