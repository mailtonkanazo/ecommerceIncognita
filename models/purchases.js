import mongoose from "../config/mongoose.config.js";

const purchasesSchema = mongoose.Schema({

    id: String,
    userId: String,
   // products: [idProduct],
    total: Number,
    //PaymentMethod: [idPaymentMethod],
});

const purchases = mongoose.model("purchases", purchasesSchema);

export default purchases;
