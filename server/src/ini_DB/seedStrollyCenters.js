import StrollyCenters from "../models/StrollyCenters.js";

export const seedStrollyCenters = async () => {
  await StrollyCenters.create(data);
};

const data = [
  {
    _id: "L1",
    centerName: "Dam Amsterdam",
    location: {
      cityName: "Amsterdam",
      address: "Dam, 1012 NP Amsterdam",
      lat: 52.373001,
      long: 4.89324,
    },
  },
  {
    _id: "L2",
    centerName: "Rembrand plain Amsterdam",
    location: {
      cityName: "Amsterdam",
      address: "1017 CT Ámsterdam",
      lat: 52.36387,
      long: 4.87113,
    },
  },
  {
    _id: "L3",
    centerName: "Amsterdam centraal",
    location: {
      cityName: "Amsterdam",
      address: "Stationsplein, 1012 AB Amsterdam",
      lat: 52.37789,
      long: 4.89985,
    },
  },
  {
    _id: "L4",
    centerName: "Amsterdam Airport Schiphol",
    location: {
      cityName: "Amsterdam",
      address: "Evert van de Beekstraat 202, 1118 CP Schiphol, Netherlands",
      lat: 52.301998,
      long: 4.79772,
    },
  },
  {
    _id: "L5",
    centerName: "Vondal Park Amsterdam",
    location: {
      cityName: "Amsterdam",
      address: "Vondelpark 2, 1071 AA Amsterdam",
      lat: 52.35808,
      long: 4.86844,
    },
  },
  {
    _id: "L6",
    centerName: "Groningen Central",
    location: {
      cityName: "Groningen",
      address: "Stationsplein 4, 9726 AE Groningen",
      lat: 53.211,
      long: 6.5641,
    },
  },
  {
    _id: "L7",
    centerName: "Zernike Campus",
    location: {
      cityName: "Groningen",
      address: "Zernikepark 1, 9747 AA Groningen",
      lat: 53.2430052,
      long: 6.5304943,
    },
  },
  {
    _id: "L8",
    centerName: "University Museum",
    location: {
      cityName: "Groningen",
      address: "Oude Kijk in Het Jatstraat 7A, 9712 EA",
      lat: 53.2183975,
      long: 6.5628424,
    },
  },
  {
    _id: "L9",
    centerName: "Deventer Station",
    location: {
      cityName: "Deventer",
      address: "Stationsplein 3B, 7411 HB Deventer",
      lat: 52.25688,
      long: 6.16131,
    },
  },
  {
    _id: "L10",
    centerName: "Wachtende Moeder Deventer",
    location: {
      cityName: "Deventer",
      address: "Wachtende Moeder, Grote Kerkhof, 7411 KV Deventer",
      lat: 52.2513,
      long: 6.15481,
    },
  },
  {
    _id: "L11",
    centerName: "Karel de Groteplein Deventer",
    location: {
      cityName: "Deventer",
      address: "Karel de Groteplein 42, 7415 DH Deventer",
      lat: 52.26936,
      long: 6.16456,
    },
  },
  {
    _id: "L12",
    centerName: "Lindeboomsweg Schalkhaar",
    location: {
      cityName: "Deventer",
      address: "Lindeboomsweg 1A-2, 7433 BH Schalkhaar",
      lat: 52.26727,
      long: 6.19487,
    },
  },
  {
    _id: "L13",
    centerName: "Flora Deventer",
    location: {
      cityName: "Deventer",
      address: "Flora 14, 7422 LL Deventer",
      lat: 52.2478,
      long: 6.21694,
    },
  },
  {
    _id: "L14",
    centerName: "Den Haag station ",
    location: {
      cityName: "Den Haag",
      address: "Centraal Station, Rijnstraat, 2515 XP Den Haag",
      lat: 52.08092,
      long: 4.3232,
    },
  },
  {
    _id: "L15",
    centerName: "Grote Markt Den Haag",
    location: {
      cityName: "Den Haag",
      address: "Grote Markt, 2511 BG Den Haag",
      lat: 52.0758,
      long: 4.30892,
    },
  },
  {
    _id: "L16",
    centerName: "Huis ten Bosch Den Haag",
    location: {
      cityName: "Den Haag",
      address: "Huis ten Bosch, Zuiderpad, 2594 AP Den Haag",
      lat: 52.09309,
      long: 4.3437,
    },
  },
  {
    _id: "L17",
    centerName: "De Pier Den Haag",
    location: {
      cityName: "Den Haag",
      address: "De Pier, Noorderstrand, 2586 JK Den Haag",
      lat: 52.11775,
      long: 4.27998,
    },
  },
  {
    _id: "L18",
    centerName: "Soestdijkseplein Den Haag",
    location: {
      cityName: "Den Haag",
      address: "Soestdijkseplein 24T, 2574 GX Den Haag",
      lat: 52.06165,
      long: 4.28307,
    },
  },
];
