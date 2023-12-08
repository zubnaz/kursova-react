import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { changeRole, exitOrEnter } from "../Menu/menu";

export default function Logout() {
    const navigate = useNavigate();
    const exit = async () => {
        await fetch("https://kursova.azurewebsites.net/api/Account/exit", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        //loginAccount.logout();
        exitOrEnter(false);
    }
    useEffect(() => {
        exit();
        navigate(-1);
    })
}