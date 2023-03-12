import mongoose from "mongoose";

const UserSChema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    image: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    allOrder: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Order",
      },
    ],

    location: String,
    occupation: String,
  },

  { timestamps: true }
);

const User = mongoose.model("User", UserSChema);
export default User;
