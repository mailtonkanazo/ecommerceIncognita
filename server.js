import "dotenv/config";

import productsControllers from "./controllers/productsControllers.js";
import categoryControllers from "./controllers/categoryControllers.js";
import purchasesControllers from "./controllers/purchasesControllers.js";
import adminControllers from "./controllers/adminControllers.js";
import paymentControllers from "./controllers/paymentControllers.js";
import express from "express";
//import Product from "./models/Product.js";
import usersControllers from "./controllers/usersControllers.js";

const app = express();

app.use(express.json());


//Rutas de admin
app.get("/api/admin", adminControllers.list);
app.get("/api/admin/:id", adminControllers.listOne);
app.post("/api/admin", adminControllers.create);
app.patch("/api/admin/:id", adminControllers.update);
app.delete("/api/admin/:id", adminControllers.deleteAdmin);

//Rutas de users
app.get("/api/users", usersControllers.list);
app.get("/api/users/:id", usersControllers.listOne);
app.post("/api/users", usersControllers.create);
app.patch("/api/users/:id", usersControllers.update);
app.delete("/api/users/:id", usersControllers.deleteUsers);

//Rutas de product
app.get("/api/product", productsControllers.list);
app.get("/api/product/:id", productsControllers.listOne);
app.post("/api/product", productsControllers.create);
app.patch("/api/product/:id", productsControllers.update);
app.delete("/api/product/:id", productsControllers.deleteProduct);

//rutas de purchases
app.get("/api/purchases", purchasesControllers.list);
app.post("/api/purchases", purchasesControllers.create);

//Rutas de payment
app.get("/api/payment", paymentControllers.list);
app.get("/api/payment/:id", paymentControllers.listOne);
app.post("/api/payment", paymentControllers.create);
app.patch("/api/payment/:id", paymentControllers.update);
app.delete("/api/payment/:id", paymentControllers.deletePayment);

//Rutas de category
app.get("/api/category", categoryControllers.categoryList);
app.get("/api/category/:id", categoryControllers.listOne);
app.post("/api/category", categoryControllers.categoryCreate);
app.patch("/api/category/:id", categoryControllers.update);
app.delete("/api/category/:id", categoryControllers.deleteCategory);

//Ruta Privada (dejé esta ruta comentada mientras terminamos el resto)
// app.post(
//   "/api7product/profile",
//   expressjwt({ algoritmos: ["HS256"], secret: process.env.JWT_SECRET }),
//   userController.profile
// );

app.listen(3000, () => {
  console.log("servidor corriendo en el puerto 3000");
});
