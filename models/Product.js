import mongoose from "../config/mongoose.config.js";

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  size: String,
  ref: Number,
  color: String,
  stock: Number,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
