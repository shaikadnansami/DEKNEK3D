import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h1>DekNek3D</h1>
      <div>
        <Link to="/">Home</Link>

        {!token ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;