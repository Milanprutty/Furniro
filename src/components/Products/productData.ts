export interface Products {
  name: string;
  description: string;
  price: number;
  id: string;
  options: string[];
  info: string;
  reviews: string[];
}

const getRandomId = () => {
  return crypto.randomUUID();
};

export const productArray: Products[] = [
  {
    id: getRandomId(),
    name: "Syltherine",
    description: "Stydddlish cafe chair",
    price: 100,
    options: ["L", "XL", "XS"],
    info: "abc",
    reviews: ["test", "example"],
  },
  {
    id: getRandomId(),
    name: "Syltherine",
    description: "Styldish cafe chair",
    price: 1000,
    options: ["L", "XL", "XS"],
    info: "abc",
    reviews: ["test", "example"],
  },
  {
    id: getRandomId(),
    name: "Syltherine",
    description: "Stysalish cafe chair",
    price: 100,
    options: ["L", "XL", "XS"],
    info: "abc",
    reviews: ["test", "example"],
  },
  {
    id: getRandomId(),
    name: "Syltherine",
    description: "Stysalish cafe chair",
    price: 100,
    options: ["L", "XL", "XS"],
    info: "abc",
    reviews: ["test", "example"],
  },
  {
    id: getRandomId(),
    name: "Syltherine",
    description: "Styglish cafe chair",
    price: 100,
    options: ["L", "XL", "XS"],
    info: "abc",
    reviews: ["test", "example"],
  },
  {
    id: getRandomId(),
    name: "aaaSyltherine",
    description: "Styjglish cafe chair",
    price: 200,
    options: ["L", "XL", "XS"],
    info: "abc",
    reviews: ["test", "example"],
  },
  {
    id: getRandomId(),
    name: "Syltherine",
    description: "Stweylish cafe chair",
    price: 10,
    options: ["L", "XL", "XS"],
    info: "abc",
    reviews: ["test", "example"],
  },
  {
    id: getRandomId(),
    name: "Syltherine",
    description: "Stylisaaah cafe chair",
    price: 100,
    options: ["L", "XL", "XS"],
    info: "abc",
    reviews: ["test", "example"],
  },
  {
    id: getRandomId(),
    name: "Syltherine",
    description: "Stylisbbbh cafe chair",
    price: 100,
    options: ["L", "XL", "XS"],
    info: "abc",
    reviews: ["test", "example"],
  },
  {
    id: getRandomId(),
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 100,
    options: ["L", "XL", "XS"],
    info: "abc",
    reviews: ["test", "example"],
  },
  {
    id: getRandomId(),
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 100,
    info: "abc",
    reviews: ["test", "example"],
    options: ["L", "XL", "XS"],
  },
  {
    id: getRandomId(),
    name: "Syltherine",
    description: "fdsfdsfd cafe chair",
    price: 100,
    options: ["L", "XL", "XS"],
    info: "abc",
    reviews: ["test", "example"],
  },
  {
    id: getRandomId(),
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 100,
    info: "abc",
    reviews: ["test", "example"],
    options: ["L", "XL", "XS"],
  },
  {
    id: getRandomId(),
    name: "Syltherine",
    description: "Stydddlish cafe chair",
    price: 100,
    options: ["L", "XL", "XS"],
    info: "abc",
    reviews: ["test", "example"],
  },
];
