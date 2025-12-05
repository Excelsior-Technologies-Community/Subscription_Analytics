import Subscription from "../Model/subscriptionmodel.js";



export const addSubscription = async (req, res) => {
  try {
    const newSub = await Subscription.create(req.body);
    res.status(201).json({
      message: "Subscription added successfully",
      data: newSub,
    });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
};


export const getAllSubscriptions = async (req, res) => {
  try {
    const data = await Subscription.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
};
