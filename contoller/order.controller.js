import { v2 as cloudinary } from "cloudinary";

import * as dotenv from "dotenv";
import mongoose from "mongoose";
import OrderModel from "../models/order.js";
import User from "../models/User.js";

// dotenv.config();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_CLOUD_API,
//   api_secret: process.env.CLOUDINARY_CLOUD_API_SECREAT,
// });

const createOrder = async (req, res) => {
  try {
    const { product, state, lg, phone } = req.body;

    const session = await mongoose.startSession();
    session.startTransaction();

    const user = await User.findOne({ email }).session();
    if (!user) throw new Error("User not found");

    const newOder = await OrderModel.create({
      product,
      state,
      lg,
      phone,
    });

    user.allOrder.push(newOder._id);
    await user.save({ session });
    await session.commitTransaction();

    res.status(200).json({ message: "Order Created Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createOrder };
