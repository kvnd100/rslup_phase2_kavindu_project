const express = require("express");

const order = {
  id: 1,
  discount: false,
  product: [
    {
      id: 1,
      title: "Tandoori Chicken",
      price: 930,
      description: "Tandoori chicken & onions with a double layer of cheese.",
    },
  ],
};

const SERVICE_CHARGE = 5;

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json(order);
});

router.get("/checkout", (req, res, next) => {
  let total = order.product.reduce((acc, p) => acc + p.price, 0);
  if (order.discount) {
    total -= total * 0.15;
  }
  const checkoutTotal = total + total * (SERVICE_CHARGE / 100);
  res.json({ checkout: checkoutTotal });
});

router.patch("/", (req, res, next) => {
  const updatedOrder = req.body;
  if (updatedOrder) {
    Object.assign(order, updatedOrder);
    res.json({ message: "Order updated successfully", order });
  } else {
    res.status(400).json({ error: "Invalid request body" });
  }
});

router.delete("/", (req, res, next) => {
  Object.keys(order).forEach((key) => delete order[key]);
  res.json({ message: "Order deleted successfully" });
});

module.exports = router;
