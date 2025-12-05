import express from "express";
import {
  monthlyRevenue,
  planRevenue,
  statusCount,
  topUsers,
  totalRevenue,
} from "../controllers/analyticscontroller.js";

const router = express.Router();

router.get("/total-revenue", totalRevenue);
router.get("/monthly-revenue", monthlyRevenue);
router.get("/status-count", statusCount);
router.get("/plan-revenue", planRevenue);
router.get("/top-users", topUsers);

export default router;
