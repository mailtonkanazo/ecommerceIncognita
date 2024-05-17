import mongoose from "../config/mongoose.config.js";

const usersSchema = mongoose.Schema({
    
  name: String,
  lastname: String,
  identification: Number,
  email: String,
  password: String,
  address: String,
  movil: Number,
  authorized: Boolean,
});

const Users = mongoose.model("user", usersSchema);

export default Users;