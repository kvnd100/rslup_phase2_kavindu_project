const express = require("express");

const router = express.Router();

const DUMMY_PIZZAHUT = [
  {
    id: 1,
    title: "Tandoori Chicken",
    price: "930",
    description: "Tandoori chicken & onions with a double layer of cheese.",
  },
  {
    id: 2,
    title: "Black Chicken",
    price: "930",
    description: "Flavoursome pieces of black chicken and crunchy onion.",
  },
  {
    id: 3,
    title: "Devilled Chicken",
    price: "930",
    description: "Devilled chicken in spicy sauce with a double layer of cheese.",
  },
  {
    id: 4,
    title: "Cheese Lovers",
    price: "930",
    description: "Rich tomato sauce with a triple layer of mozzarella cheese.",
  },
];

router.get("/", (req, res, next) => {
  res.json({ pizzas: DUMMY_PIZZAHUT });
});

router.get("/:pid", (req, res, next) => {
  const productId = +req.params.pid;
  const pizza = DUMMY_PIZZAHUT.find((p) => p.id === productId);
  res.json({ pizza });
});

module.exports = router;
