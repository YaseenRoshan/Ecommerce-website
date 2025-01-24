import { Link, Outlet, useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
    
    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.removeItem("token");
        navigate("/");
    }
    
    return (
        <div className="admin-dashboard">
            <nav className="sidebar">
                <Link to="admindashboard/register">Register</Link>
                <Link to="admindashboard/uploadlaptop">Upload Laptops</Link>
                <Link to="admindashboard/uploadmobile">Upload Mobiles</Link>
                <Link to="admindashboard/uploadheadphone">Upload Headphones</Link>
                <a onClick={logout}>Logout</a>
            </nav>
            <main className="content">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminDashboard;
