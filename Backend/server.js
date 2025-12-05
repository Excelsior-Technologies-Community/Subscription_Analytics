import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyticsRoutes  from "./Routers/analyticsrouter.js"
import subscriptionRoutes from "./Routers/subscriptionroute.js"
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/analytics", analyticsRoutes);


app.listen(5000, () => console.log("Server running on port 5000"));
