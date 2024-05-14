import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: String,
  gender: [
    {
      name: String,
      gender: [String], //se cambio size x gender segubn figma jct
    },
  ],
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
