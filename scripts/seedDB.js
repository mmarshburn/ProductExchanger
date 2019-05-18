const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const productSeed = [
  {
    title: "Hockey Pants",
    description: "Black and white protective hockey pants.",
    category: "Hockey",
    date: new Date(Date.now())
  },

  {
    title: "Goalie Gear 2",
    description: "Black, red and white hockey goalie leg pads.",
    category: "Hockey",
    date: new Date(Date.now())
  },

  {
    title: "Goalie Gear",
    description: "Grey and yellow hockey protective chest pad.",
    category: "Hockey",
    date: new Date(Date.now())
  },

  {
    title: "Goalie Helmet",
    description: "black helmet with a grey goalie face mask.",
    category: "Hockey",
    date: new Date(Date.now())
  },

  {
    title: "Elbow Pads",
    description: "Black, green and grey protective elbow pads.",
    category: "Hockey",
    date: new Date(Date.now())
  },

  {
    title: "Hockey Goal",
    description: "Moveable hockey goal.",
    category: "Hockey",
    date: new Date(Date.now())
  },

  {
    title: "Hockey Helmet",
    description: "White and black trim hockey helmet.",
    category: "Hockey",
    date: new Date(Date.now())
  },

  {
    title: "Hockey Jersey",
    description: "Blue with red and white trim hockey jersey.",
    category: "Hockey",
    date: new Date(Date.now())
  },

  {
    title: "Hockey Socks",
    description: "Multi color hockey socks.",
    category: "Hockey",
    date: new Date(Date.now())
  },

  {
    title: "Hockey Stick",
    description: "Three hocky stick combo.",
    category: "Hockey",
    date: new Date(Date.now())
  },

  {
    title: "Hockey Gloves",
    description: "Black and white protective hockey gloves.",
    category: "Hockey",
    date: new Date(Date.now())
  },

  {
    title: "Hockey Duffle Bag",
    description: "Black with white trim hockey duffle bag.",
    category: "Hockey",
    date: new Date(Date.now())
  },

  {
    title: "Hockey Skates",
    description: "Black, red and white hockey skates.",
    category: "Hockey",
    date: new Date(Date.now())
  },

  {
    title: "Hockey Mouth Guard",
    description: "Blue outside and clear inside mouthguard.",
    category: "Hockey",
    date: new Date(Date.now())
  },

  {
    title: "Hockey Puck",
    description: "Classic black hockey puck",
    category: "Hockey",
    date: new Date(Date.now())
  }
];

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
