import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        address: { type: String, required: true },
        paymentMethod: { type: String, required: true },
        discount: { type: Number, default:false },
        orderDate: { type: Date, default: Date.now },
        orderItems: [
          {
           product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products',
            required: true,
           },
            quantity: { type: Number, required: true },
            amount: { type: Number, required: true },
          },
        ],
      },
      { timestamps: true }
    )

const Orders = mongoose.model("Orders", ordersSchema);

export default Orders;