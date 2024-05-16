import "dotenv/config";

import productsControllers from "./controllers/productsControllers.js";
import categoryControllers from "./controllers/categoryControllers.js";

import express from "express";
import Product from "./models/Product.js";

const app = express();

app.use(express.json());

//Rutas de product
app.get("/api/product", productsControllers.list);
app.get("/api/product/:id", productsControllers.listOne);
app.post("/api/product", productsControllers.create);
app.patch("/api/product/:id", productsControllers.update);
app.delete("/api/product/:id", productsControllers.deleteProduct);

//Rutas de category
app.get("/api/category", categoryControllers.categoryList);
app.post("/api/category", categoryControllers.categoryCreate);

app.listen(3000, () => {
  console.log("servidor corriendo en el puerto 3000");
});
