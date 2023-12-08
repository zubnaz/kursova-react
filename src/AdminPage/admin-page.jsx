import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./admin-page.css";

export default function Admin_Page() {
    var data;
    const [autos, setData] = useState([]);
    const showAutos = async () => {
        data = await fetch("https://kursova.azurewebsites.net/api/Autos/all-async");
        setData(await data.json())
        //autos = await data.json();
        console.log(autos);
    }
    useEffect(() => {
        showAutos();
    }, [])
    return (<div className="main-page">
        <div className="main-page_add-button"><Link to="add-new-car">Add new car</Link></div>
        <div className="main-page_autos">
            {autos.map((element) =>
                <div className='info'># <div>{element.id}</div><div>{element.mark}</div><div>{element.model}</div> <div>{element.price}$</div><div><Link to={`update/${element.id}`}>Update</Link><Link to={`delete/${element.id}`}>Delete</Link></div></div>
            )}
        </div>
    </div>);
}