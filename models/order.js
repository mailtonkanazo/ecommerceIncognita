import mongoose from "../config/mongoose.config.js";

const orderSchema = moongose.Schema({
    user: {
        type: moongose.Types.ObjectId,
        ref: "User",
    },
    products: [
        {
            productDetail: {
                type: mongoose.Types.ObjectId,
                ref: "Product"
            },
            quantity: Number
        }
    ],

    total: Number,
    paymentMethod: String,
    cardnumber: Number,
    expirationdate: String,
    securitycode: Number,
});

const Order = moongose.model("Order", orderSchema);

export default Order;