import mongoose from "../config/mongoose.config.js";

const productSchema = mongoose.Schema({
  name: String,
  decription: String,
  ref: Number,
  colour: String,
  stock: Number,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
