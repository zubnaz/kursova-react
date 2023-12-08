import { Link } from "react-router-dom";
import './menu.css';
import { useEffect, useState } from "react";
import { userEnter } from "../Autos/autos";
export default function Menu() {
    const [isLogin, changeIsLogin] = useState(false);
    exitOrEnter = (tf) => { changeIsLogin(tf); checkIsLogin = isLogin }
    checkIsLogin = isLogin;
    const [isAdmin, changeIsAdmin] = useState("No");
    changeRole = (a) => { changeIsAdmin(a) }
    const check = async () => {
        let data = await fetch("https://kursova.azurewebsites.net/api/Account/check-signed");
        let res = await data.json();
        changeIsLogin(res == "True" ? true : false);
        if (res == "True") {
            data = await fetch("https://kursova.azurewebsites.net/api/Account/role-check");
            res = await data.json();
            changeIsAdmin(res)
        }

    }
    useEffect(() => {
        check();
    }, [])
    return (
        <div className="menu">
            <nav>
                <Link to="/">Home</Link>
                <Link to="auto-page">Autos</Link>
                {isAdmin == "Yes" && isLogin == true ? <Link to="admin-page">Admin Page</Link> : ""}
                <Link to="login-page">Login</Link>
                <Link to="register-page">Register</Link>
                {isLogin != false ? <Link to="logout">Logout</Link> : ""}
            </nav>
        </div>
    );
}
export var checkIsLogin;
export var changeRole;
export var exitOrEnter;