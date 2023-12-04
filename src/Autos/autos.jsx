import { useEffect, useState } from 'react';
import './autos.css';
import { Link } from 'react-router-dom';
export default function Autos() {

    const [autos, setData] = useState([]);
    const showAutos = async () => {
        var data = await fetch("https://kursova.azurewebsites.net/api/Autos/all");
        setData(await data.json())
        //autos = await data.json();
        console.log(autos);
    }
    useEffect(() => {
        showAutos();
    }, [])
    return (
        <div className="content">
            <h1>Our autos</h1>
            <div className='filter'>
                <div className='filter-sort'>
                    <select>
                        <option>За зростанням</option>
                        <option>За спаданням</option>
                    </select>
                    <button>Sort</button>
                    <select>
                        <option>Ціна</option>
                        <option>Марка</option>
                        <option>Модель</option>
                    </select>

                </div>
                <div className='filter-find'>
                    <input type='text' placeholder='Mark'></input>
                    <input type='text' placeholder='Model'></input>
                    <input type='number' placeholder='Price'></input>
                    <button>Find</button>
                </div>
            </div>

            <div className='autos'>
                {autos.map((element) =>

                    <div>
                        <div className='img'><img src={element.image} /></div>
                        <div className='info'><div>{element.mark}</div><div>{element.model}</div> {element.price}$</div>
                        <div className='buttons'><Link>Information</Link><Link>Buy</Link></div>
                    </div>
                )}
            </div>
        </div>
    );
}
/*{autos.map((element) => {

})}*/