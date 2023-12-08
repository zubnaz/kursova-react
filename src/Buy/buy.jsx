import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Buy() {
    const { id } = useParams();
    const navigate = useNavigate();
    var data;
    const buy = async () => {
        data = await fetch(`https://kursova.azurewebsites.net/api/Autos/buy?id=${id}`);
        navigate(-1);
    }
    useEffect(() => {
        buy();
        navigate(-1);
    }, [])

}