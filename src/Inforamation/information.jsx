import { useEffect, useState } from "react";
import './information.css';
import { useNavigate, useParams } from "react-router-dom";
export default function Information() {
    const { id } = useParams();
    const navigate = useNavigate();
    var data;
    const [car, setCar] = useState({});
    const showAuto = async () => {
        data = await fetch(`https://kursova.azurewebsites.net/api/Autos/id?id=${id}`);
        setCar(await data.json());
    }
    useEffect(() => {
        showAuto();
    }, [])

    return (
        <div className="inform">
            <div className="img"><img src={car.image} /></div>
            <div>Mark</div>
            <div>{car.mark}</div>
            <div>Model</div>
            <div>{car.model}</div>

            <div>Year</div>
            <div>{car.year}</div>
            <div>Price</div>
            <div>{car.price} $</div>
            <div>About</div>
            <div>{car.about}</div>
            <button onClick={() => { navigate(-1) }}>Back</button>
        </div>
    );
}