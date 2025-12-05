import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";


const COLORS = ["#4CAF50", "#FF9800", "#2196F3", "#9C27B0", "#F44336"];

const StatusPie = ({ data }) => {
  const formatted = data.map(item => ({
    name: item._id,
    value: item.count
  }));

  return (
    <div className="pie-wrapper">
      <h3 className="pie-title">User Subscription Status</h3>

      <PieChart width={350} height={260}>
        <Pie
          data={formatted}
          dataKey="value"
          outerRadius={100}
          label
        >
          {formatted.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={COLORS[index % COLORS.length]} 
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default StatusPie;
