import "dotenv/config";

import productsControllers from "./controllers/productsControllers.js";
import categoryControllers from "./controllers/categoryControllers.js";

import express from "express";
import Product from "./models/products.js";

const app = express();

app.use(express.json());

app.get("/api/product", productsControllers.list);
app.post("/api/product", productsControllers.create);
app.get("/api/category", categoryControllers.categoryList);
app.post("/api/category", categoryControllers.categoryCreate);

app.listen(3000, () => {
  console.log("servidor corriendo en el puerto 3000");
});
