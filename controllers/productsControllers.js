import Product from "../models/products.js";

async function list(req, res) {
  //tomar lista de productos
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json("Server Error");
  }
}

async function create(req, res) {
  //crear un producto
  try {
    const newProduct = await product.create({
      name: req.body.name,
      description: req.body.descrption,
      ref: req.body.ref,
      size: req.body.size, // caracteristica añadida jct
      colour: req.body.colour,
      stock: req.body.stock,
      price: req.body.price,
    });
    res.json(newProduct);
  } catch (err) {
    res.status(500).json("Server Error");
  }
}

export default {
  list,
  create,
};
