import "./login.css";
import { useForm } from "react-hook-form";
import { changeRole, exitOrEnter } from "../Menu/menu";
import { userEnter } from "../Autos/autos";
export default function Login() {
    const { register, handleSubmit } = useForm();
    const login = async (login_) => {
        const user = {
            emailAddress: login_.email,
            password: login_.password
        }
        let log = await fetch("https://kursova.azurewebsites.net/api/Account/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })
        const test = await log.json();
        //console.log(test);
        if (test.Message != undefined) alert(test.Message);
        else {
            alert(`Welcome ${user.emailAddress}`);
            //loginAccount.enter();
            changeRole(test.isAdmin);
            exitOrEnter(true);
            userEnter(true);
        }
    }

    return (
        <div className="login-form">
            <h1>Login account</h1>
            <form onSubmit={handleSubmit(login)}>
                <div><input {...register("email")} type="email" placeholder="Email"></input></div>
                <div><input {...register("password")} type="password" placeholder="Password"></input></div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}