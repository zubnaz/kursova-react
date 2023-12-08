import { useEffect, useState } from 'react';
import './autos.css';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { checkIsLogin } from '../Menu/menu';
export default function Autos() {
    var data
    var by = "price";
    var type = "up";
    const [autos, setData] = useState([]);

    const { register, handleSubmit } = useForm();
    const sort = async (sortProp) => {
        //console.log(s.type + " " + s.by);
        by = sortProp.by;
        type = sortProp.type;
        data = await fetch(`https://kursova.azurewebsites.net/api/Autos/sort?type=${type}&by=${by}`)
        setData(await data.json());

    }
    const find = async (findProp) => {
        //console.log(findProp.mark + " - " + findProp.model + " - " + findProp.price);
        data = await fetch(`https://kursova.azurewebsites.net/api/Autos/find?mark=${findProp.mark}&model=${findProp.model}&price=${findProp.price}`);
        setData(await data.json());
    }
    const showAutos = async () => {
        data = await fetch("https://kursova.azurewebsites.net/api/Autos/all-async");
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
                <form onSubmit={handleSubmit(sort)} className='filter-sort'>
                    <select {...register("type")}>
                        <option value="up">За зростанням</option>
                        <option value="down">За спаданням</option>
                    </select>
                    <button type='submit'>Sort</button>
                    <select {...register("by")}>
                        <option value="price">Ціна</option>
                        <option value="mark">Марка</option>
                        <option value="model">Модель</option>
                    </select>

                </form>
                <form onSubmit={handleSubmit(find)} className='filter-find'>
                    <input {...register("mark")} type='text' placeholder='Mark'></input>
                    <input {...register("model")} type='text' placeholder='Model'></input>
                    <input {...register("price")} type='number' placeholder='Price'></input>
                    <button type='submit'>Find</button>
                </form>
            </div>
            <div className='autos'>
                {autos.map((element) =>
                    <div>
                        <div className='img'><img src={element.image} /></div>
                        <div className='info'><div>{element.mark}</div><div>{element.model}</div> {element.price}$</div>
                        <div className='buttons'><Link to={`information/${element.id}`}>Information</Link>{checkIsLogin ? <button className={`buy_${element.id}`} onClick={() => {
                            const a = document.querySelector(`div.buttons button.buy_${element.id}`);
                            a.disabled = true;
                            a.innerHTML = "Bought";
                        }}>Buy</button> : ""}</div>
                    </div>
                )}
            </div>
        </div >
    );
}
/*<div className='autos'>
                {autos.map((element) => {
                    console.log(element);
                    <div>
                        <div className='img'><img src={element.image} /></div>
                        <div className='info'><div>{element.mark}</div><div>{element.model}</div> {element.price}$</div>
                        <div className='buttons'><Link to={`information/${element.id}`}>Information</Link>{checkIsLogin ? <Link to={`buy/${element.id}`}>Buy</Link> : ""}</div>
                    </div>
                }
                )}
            </div>*/
