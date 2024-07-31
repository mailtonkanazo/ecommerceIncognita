import Product from "../models/Product.js";

//Solicitar lista de todos los productos
async function list(req, res) {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json("Server Error");
  }
}

// Solicitar la informacion de UN producto
async function listOne(req, res) {
  try {
    const productId = req.params.id;
    const productoSolicitado = await Product.findById(productId);
    res.status(200).json(productoSolicitado);
  } catch (err) {
    console.error("Error al obtener el producto:", err);
  }
}

//crear un producto
// Crear productos
async function create(req, res) {
  try {
    // Verificar si el cuerpo de la solicitud es un array
    if (Array.isArray(req.body)) {
      // Insertar múltiples productos
      const newProducts = await Product.insertMany(req.body);
      res.status(201).json(newProducts);
    } else {
      // Si no es un array, devolver un error
      res
        .status(400)
        .json({
          error: "El cuerpo de la solicitud debe ser un array de productos",
        });
    }
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al crear los productos:", err);
  }
}

//Modificar parcialmente un producto
async function update(req, res) {
  try {
    const productModified = await Product.findById(req.params.id);
    productModified.name = req.body.name || productModified.name;
    productModified.description =
      req.body.description || productModified.description;
    productModified.ref = req.body.ref || productModified.ref;
    productModified.size = req.body.size || productModified.size;
    productModified.color = req.body.color || productModified.color;
    productModified.stock = req.body.stock || productModified.stock;
    productModified.price = req.body.price || productModified.price;

    await productModified.save();
    res.json(productModified);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
}

//Eliminar un producto
async function deleteProduct(req, res) {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json("Producto eliminado");
  } catch {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al eliminar el producto:", err);
  }
}

export default {
  list,
  listOne,
  create,
  update,
  deleteProduct,
};
