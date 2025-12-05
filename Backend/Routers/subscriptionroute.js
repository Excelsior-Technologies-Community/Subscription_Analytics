import express from "express";
import {
  addSubscription,
  getAllSubscriptions,
} from "../controllers/subscriptionControler.js";

const router = express.Router();

router.post("/add", addSubscription);
router.get("/all", getAllSubscriptions);

export default router;
