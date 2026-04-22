import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get(
         "https://deknk3d-backend.onrender.com/api/auth",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setUser(res.data);
    };

    fetchData();
  }, []);

  return (
    <section className="dashboard">
      <h1>Welcome back, {user.name} 👋</h1>
      <p className="subtitle">Manage your 3D creations & orders</p>

      <div className="dashboard-grid">
        <div className="dash-card">
          <h3>📦 Orders</h3>
          <p>Track your recent orders</p>
        </div>

        <div className="dash-card">
          <h3>🧩 Designs</h3>
          <p>Your uploaded 3D models</p>
        </div>

        <div className="dash-card">
          <h3>⚡ Activity</h3>
          <p>Recent activity & updates</p>
        </div>
      </div>

      <div className="quick-actions">
        <button>Upload Model</button>
        <button>Create Design</button>
      </div>
    </section>
  );
}

export default Dashboard;