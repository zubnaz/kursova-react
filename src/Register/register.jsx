import "./register.css";
import { useForm } from "react-hook-form";
export default function Register() {
    const { register, handleSubmit } = useForm();
    const new_account = async (user) => {
        let newUser = {
            emailAddress: user.email,
            password: user.password,
            phoneNumber: user.phone_number,
            birthdate: user.birthdate
        }
        let test = [];
        let reg = await fetch("https://kursova.azurewebsites.net/api/Account/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newUser)
        })
        test = await reg.json();

        if (test.Message != undefined) alert(test.Message);
        if (test.errors != undefined) {

            if (test.errors.EmailAddress !== undefined) {
                const emailDiv = document.querySelector("div.register-form form div:nth-child(1)");
                const emailInput = document.querySelector("div.register-form form div:nth-child(1) input");
                emailDiv.style.border = "1px solid red";

                emailInput.addEventListener("focus", () => {
                    if (emailDiv.style.border == "1px solid red") emailDiv.style.border = "none";
                })
            }
            if (test.errors.Password != undefined) {
                const passwordDiv = document.querySelector("div.register-form form div:nth-child(2)");
                const passwordInput = document.querySelector("div.register-form form div:nth-child(2) input");
                passwordDiv.style.border = "1px solid red";

                passwordInput.addEventListener("focus", () => {
                    if (passwordDiv.style.border == "1px solid red") passwordDiv.style.border = "none";
                })
            }
            if (test.errors.PhoneNumber != undefined) {
                const phoneNumberDiv = document.querySelector("div.register-form form div:nth-child(3)");
                const phoneNumberInput = document.querySelector("div.register-form form div:nth-child(3) input");
                phoneNumberDiv.style.border = "1px solid red";

                phoneNumberInput.addEventListener("focus", () => {
                    if (phoneNumberDiv.style.border == "1px solid red") phoneNumberDiv.style.border = "none";
                })
            }
            if (test.errors.Birthdate != undefined) {
                const birthdateDiv = document.querySelector("div.register-form form div:nth-child(4)");
                const birthdateInput = document.querySelector("div.register-form form div:nth-child(4) input");
                birthdateDiv.style.border = "1px solid red";

                birthdateInput.addEventListener("focus", () => {
                    if (birthdateDiv.style.border == "1px solid red") birthdateDiv.style.border = "none";
                })
            }
        }
        else {
            console.log(test)
        }




    }
    return (
        <div className="register-form">
            <h1>Register new account</h1>
            <form onSubmit={handleSubmit(new_account)}>
                <div><input {...register("email")} type="email" placeholder="Email"></input></div>
                <div><input {...register("password")} type="password" placeholder="Password"></input></div>
                <div><input {...register("phone_number")} type="phone" placeholder="Phone number"></input></div>
                <div><input {...register("birthdate")} type="date"></input></div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}