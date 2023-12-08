import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default function Delete() {
    //e.preventDefault();
    const { id } = useParams();
    const navigate = useNavigate();

    const del = async () => {
        var data;
        var result;
        console.log(`https://kursova.azurewebsites.net/api/Autos/Delete?id=${id}`);
        data = await fetch(`https://kursova.azurewebsites.net/api/Autos/Delete?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }).catch(err => { alert(err) })
        navigate(-1);
    }
    useEffect(() => {
        del();
    }, [])
    return (
        <div></div>
    )
}