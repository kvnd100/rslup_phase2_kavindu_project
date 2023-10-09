const express = require("express");

const app = express();

const productRoutes = require("./routes/product-routes");
const orderRoutes = require("./routes/order-routes");

app.use(productRoutes);
app.use("/api/order", orderRoutes);

app.listen(3000);
