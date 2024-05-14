import productsControllers from "./controllers/productsControllers.js";
import categoryControllers from "./controllers/categoryControllers.js";

import express from "express";

const app = express();

app.use(express.json());
app.get("/api/product");
app.post("/api/product");

app.listen(3000, () => {
  console.log("servidor corriendo en el puerto 3000");
});
