import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.connect("mongodb://127.0.0.1/ecommerceIncognita");

app.use(express.json());

const categorySchema = mongoose.Schema({
  name: String,
  gender: [
    {
      name: String,
      size: [String],
    },
  ],
});

const productSchema = mongoose.Schema({
  name: String,
  decription: String,
  ref: Number,
  colour: String,
  stock: Number,
  price: Number,
});

const product = mongoose.model("product", productSchema);
const category = mongoose.model("category", categorySchema);

app.get("/api/product", async function (req, res) {
  const productos = await product.find();
  res.json(productos);
});

app.post("/api/product", async function (req, res) {
  const newProduct = await product.create({
    name: req.body.name,
    decription: req.body.descrption,
    ref: req.body.ref,
    colour: req.body.colour,
    stock: req.body.stock,
    price: req.body.price,
  });
  res.json(newProduct);
});
//prueba push clone

app.listen(3000, () => {
  console.log("servidor corriendo en el puerto 3000");
});
