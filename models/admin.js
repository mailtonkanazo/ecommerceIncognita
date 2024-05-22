import mongoose from "../config/mongoose.config.js";

const adminSchema = mongoose.Schema({
    
  name: String,
  lastname: String,
  identification: Number,
  email: String,
  password: String,
  movil: Number,
  authorized: Boolean,
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;