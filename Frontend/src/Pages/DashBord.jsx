import React, { useEffect, useState } from "react";
import { API } from "../api";
import Layout from "../Componets/Layout";
import RevenueChart from "../Componets/RevenueChart";
import StatusPie from "../Chart/StatusPie";

const Dashboard = () => {
  const [total, setTotal] = useState(0);
  const [monthly, setMonthly] = useState([]);
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    API.get("/analytics/total-revenue").then(res => setTotal(res.data.totalRevenue));
    API.get("/analytics/monthly-revenue").then(res => setMonthly(res.data));
    API.get("/analytics/status-count").then(res => setStatusData(res.data));
  }, []);

  return (
    <Layout>
      <div className="cards">
        <div className="card">
          <h3>Total Revenue</h3>
          <p>₹{total}</p>
        </div>

        <div className="card">
          <h3>Total Users</h3>
          <p>{monthly.length * 10}</p>
        </div>

        <div className="card">
          <h3>Active Subscriptions</h3>
          <p>{statusData.find(s => s._id === "active")?.count || 0}</p>
        </div>

        <div className="card">
          <h3>Expired Subscriptions</h3>
          <p>{statusData.find(s => s._id === "expired")?.count || 0}</p>
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <RevenueChart data={monthly} />
        <StatusPie data={statusData} />
      </div>
    </Layout>
  );
};

export default Dashboard;
