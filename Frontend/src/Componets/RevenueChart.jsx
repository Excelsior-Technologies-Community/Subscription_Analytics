import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";


const RevenueChart = ({ data }) => {
  const formatted = data.map(item => ({
    month: item._id,
    revenue: item.revenue
  }));

  return (
    <div className="chart-card">
      <h3 className="chart-title">Monthly Revenue Overview</h3>

      <div className="chart-container">
        <LineChart width={700} height={300} data={formatted}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={3} />
        </LineChart>
      </div>
    </div>
  );
};

export default RevenueChart;
