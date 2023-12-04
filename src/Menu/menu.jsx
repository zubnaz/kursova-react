import { Link } from "react-router-dom";
import './menu.css';
export default function Menu() {
    return (
        <nav className="menu">
            <Link to="/">Home</Link>
            <Link to="auto-page">Autos</Link>
            <Link to="admin-page">Admin Page</Link>
            <Link to="login-page">Login</Link>
            <Link to="registred-page">Registred</Link>
        </nav>
    );
}