import Category from "../models/Category.js";

async function categoryList(req, res) {
  try {
    const categoria = await Category.find();
    res.json(categoria);
  } catch (err) {
    res.status(500).json("Server Error");
  }
}

async function categoryCreate(req, res) {
  try {
    const newCategory = await product.create({
      name: req.body.name,
      gender: req.body.gender,
    });
    res.json(newCategory);
  } catch (err) {
    res.status(500).json("Server Error");
  }
}

export default {
  categoryList,
  categoryCreate,
};
