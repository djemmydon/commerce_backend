import express from "express";
import { createOrder } from "../contoller/order.controller.js";

const router = express.Router();

router.post("/order", createOrder);

export default router;
