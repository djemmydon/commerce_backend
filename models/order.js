import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
    product: { type: Array, required },
    phone: { type: String },
    state: { type: String },
    lg: { type: String },
    user: {type: mongoose.Schema.ObjectId, ref:"User"}
})

const OrderModel = mongoose.model("Order", OrderSchema)

export default OrderModel