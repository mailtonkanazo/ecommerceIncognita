import Order from "../models/order.js"

async function list(req, res) {
    try {
        const orders = await Order.find().populate("user").populate("products.productId");
        return res.json(orders)
    } catch (err) {
        console.log(err)
    }
}

async function create(req, res) {
    console.log("OK OK OK")
    try {
        const newOrder = await Order.create({
            user: req.auth.id,
            products: req.body.products,
            total: req.body.total,
            paymentMethod: req.body.paymentMethod,
            cardnumber: req.body.cardnumber,
            expirationdate: req.body.expirationdate,
            securitycode: req.body.securitycode,
            address: req.body.address
        })
        return res.json(newOrder)
    } catch (err) {
        console.log(err)
    }

}

export default { list, create }