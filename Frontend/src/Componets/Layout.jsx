import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";


const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="layout">

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <h2 className="logo">Analytics</h2>

        <ul>
          <li className="active">Dashboard</li>
          <li>Users</li>
          <li>Subscriptions</li>
          <li>Reports</li>
        </ul>
      </aside>

      {/* Main */}
      <main className="main">

        {/* Top Header */}
        <header>
          <FiMenu className="menu-icon" onClick={() => setOpen(!open)} />
          {/* <h3>Subscription Dashboard</h3> */}
        </header>

        {/* Page Content */}
        <div className="content">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
