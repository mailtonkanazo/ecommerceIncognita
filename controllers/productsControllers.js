import Product from "../models/products.js";

async function list(req, res) {
  const productos = await Product.find();
  res.json(productos);
}

async function create(req, res) {
  const newProduct = await product.create({
    name: req.body.name,
    decription: req.body.descrption,
    ref: req.body.ref,
    size: req.body.size,
    colour: req.body.colour,
    stock: req.body.stock,
    price: req.body.price,
  });
  res.json(newProduct);
}

export default {
  list,
  create,
};
