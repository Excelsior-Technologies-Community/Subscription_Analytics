import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  plan: String,
  price: Number,
  status: String, // active | expired | cancelled
  createdAt: { type: Date, default: Date.now }
});

 const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;