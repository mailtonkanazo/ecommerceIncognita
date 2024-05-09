import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.connect("mongodb://127.0.0.1/ecommerceIncognita");

app.use(express.json());










app.listen(3000, () => {
    console.log("servidor corriendo en el puerto 3000");
})
