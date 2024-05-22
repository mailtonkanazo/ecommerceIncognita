import purchases from "../models/purchases.js";


// solicitar lista de todos los productos
async function list(req, res) {
  try {
    const purchases = await purchases.find();
    res.json(purchases);
  } catch (err) {
    res.status(500).json("Server Error");
  }
}

async function create(req, res) {
  try {
    const newPurchases = await purchases.create({
      userId: req.body.userId,
      products: req.body.products,
      total: req.body.total, // caracteristica añadida jct
      PaymentMethod: req.body.PaymentMethod,
 
    });
    res.json(newPurchases);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al crear el carrito:", err);
  }
}

export default {
    list,
     create,
   
  };
  