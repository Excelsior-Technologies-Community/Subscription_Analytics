import Subscription from "../Model/subscriptionmodel.js";



// TOTAL REVENUE
export const totalRevenue = async (req, res) => {
  const revenue = await Subscription.aggregate([
    { $group: { _id: null, total: { $sum: "$price" } } }
  ]);

  res.json({ totalRevenue: revenue[0]?.total || 0 });
};

// MONTHLY REVENUE CHART
export const monthlyRevenue = async (req, res) => {
  const result = await Subscription.aggregate([
    {
      $group: {
        _id: { $month: "$createdAt" },
        revenue: { $sum: "$price" },
      }
    },
    { $sort: { "_id": 1 } }
  ]);

  res.json(result);
};

// USER COUNT BY STATUS
export const statusCount = async (req, res) => {
  const result = await Subscription.aggregate([
    { $group: { _id: "$status", count: { $sum: 1 } } }
  ]);

  res.json(result);
};

// PLAN-WISE REVENUE
export const planRevenue = async (req, res) => {
  const result = await Subscription.aggregate([
    { $group: { _id: "$plan", revenue: { $sum: "$price" } } }
  ]);

  res.json(result);
};

// TOP PAYING USERS
export const topUsers = async (req, res) => {
  const result = await Subscription.aggregate([
    {
      $group: {
        _id: "$userId",
        userName: { $first: "$userName" },
        totalPaid: { $sum: "$price" }
      }
    },
    { $sort: { totalPaid: -1 } },
    { $limit: 5 }
  ]);

  res.json(result);
};
