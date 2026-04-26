import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Dashboard</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}