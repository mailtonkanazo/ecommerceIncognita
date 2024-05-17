import Users from "../models/users.js";

//Solicitar lista de todos los usuarios
async function list(req, res) {
  try {
    const usuarios = await Users.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json("Server Error");
  }
}
async function create(req, res) {
  try {
    const newUsers = await Users.create({
      name: req.body.name,
      lastname: req.body.lastname,
      identification: req.body.identification,
      email: req.body.email, // caracteristica añadida jct
      password: req.body.password,
      address: req.body.address,
      movil: req.body.movil,
      authorized: req.body.authorized,
    });
    res.json(newUsers);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al crear el usuario:", err);
  }
}
