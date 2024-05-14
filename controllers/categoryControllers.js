import Category from "../models/category.js";

async function categoryList(req, res) {
  const categoria = await Category.find();
  res.json(categoria);
}

async function categoryCreate(req, res) {
  const newCategory = await product.create({
    name: req.body.name,
    gender: req.body.gender,
  });
  res.json(newCategory);
}
export default {
  categoryList,
  categoryCreate,
};
