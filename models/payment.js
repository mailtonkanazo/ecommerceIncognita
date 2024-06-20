import mongoose from "../config/mongoose.config.js";

const paymentSchema = mongoose.Schema({
  paymentmethod: String,
  cardnumber: Number,
  dateofexpiry: String,
  securitycode: Number,
  //Billing Information ------
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
