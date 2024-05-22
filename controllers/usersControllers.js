import Users from "../models/payment.js";

//Solicitar lista de todos los usuarios
async function list(req, res) {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    res.status(500).json("Server Error");
  }
}

// Solicitar la informacion de UN usuario
async function listOne(req, res) {
  try {
    const usersId = req.params.id;
    const usersSolicitado = await User.findById(usersId);
    res.status(200).json(usersSolicitado);
  } catch (err) {
    console.error("Error al obtener el metodo de pago:", err);
  }
}

//añadir un usuario
async function create(req, res) {
  try {
    const newUsers = await Users.create({
      name: req.body.name,
      lastname: req.body.lastname,
      identification: req.body.identification,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      movil: req.body.movil,
      authorized: req.body.authorized,
    });
    res.json(newUsers);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al añadir el usuario", err);
  }
}

//Modificar parcialmente un usuario
async function update(req, res) {
  try {
    const usersModified = await Users.findById(req.params.id);
    usersModified.name = req.body.name || usersModified.name;
    usersModified.lastname = req.body.lastname || usersModified.lastname;
    usersModified.identification = req.body.identification || usersModified.identification;
    usersModified.email = req.body.email || usersModified.email;
    usersModified.password = req.body.password || usersModified.password;
    usersModified.address = req.body.address || usersModified.address;
    usersModified.movil = req.body.movil || usersModified.movil;
    usersModified.authorized = req.body.authorized || usersModified.authorized;

    await usersModified.save();
    res.json(usersModified);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
}

//Eliminar un usuario
async function deleteUsers(req, res) {
  try {
    await Payment.findByIdAndDelete(req.params.id);
    res.json("Usuario Eliminado");
  } catch {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al eliminar el usuario", err);
  }
}

export default {
  list,
  listOne,
  create,
  update,
  deleteUsers,
};
