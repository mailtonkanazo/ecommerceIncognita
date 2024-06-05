import mongoose from "../config/mongoose.config.js";

const usersSchema = mongoose.Schema({
    
  name: String,
  lastname: String,
  identification: Number,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    match: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/,
  },
  address: String,
  movil: Number,
  authorized: Boolean,
});

const Users = mongoose.model("user", usersSchema);

export default Users;