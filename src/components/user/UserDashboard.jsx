import { Link, Outlet, useNavigate } from "react-router-dom";
import "./UserDashboard.css";
import CartIcon from "../../CartIcon";

const UserDashboard = () => {
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Menu */}
      
      <CartIcon />
      
      <div className="dashboard-sidebar">
        <nav className="dashboard-nav">
          <Link to="userdashboard/laptops" className="dashboard-link">Laptops</Link>
          <Link to="userdashboard/mobiles" className="dashboard-link">Mobiles</Link>
          <Link to="userdashboard/headphones" className="dashboard-link">Headphones</Link>
          <a href="/" onClick={logout} className="dashboard-link">Logout</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;

