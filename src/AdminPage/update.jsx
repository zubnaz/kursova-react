import { useNavigate, useParams } from "react-router-dom";
import "./admin-page.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export default function Update() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState({});
    const { register, handleSubmit } = useForm();
    let test = 5;
    const updateCar = async (carU) => {
        console.log(carU);
        const update_car = {
            id: car.id,
            mark: carU.mark != "" ? carU.mark : car.mark,
            model: carU.model != "" ? carU.model : car.model,
            price: carU.price != "" ? carU.price : car.price,
            year: carU.year != "" ? carU.year : car.year,
            image: carU.image != "" ? carU.image : car.image,
            colorId: carU.colorId != 0 ? carU.colorId : car.colorId,
            about: carU.about != "" ? carU.about : car.about
        }
        console.log(update_car);
        let data = await fetch("https://kursova.azurewebsites.net/api/Autos/Edit", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(update_car)
        })
        let result;
        try {
            result = await data.json();
        }
        catch (err) {
            console.log(err);
        }

        let err = "";
        if (result != undefined) {
            if (result.Message != undefined) alert(result.Message);
            if (result.errors.Mark != undefined) {
                const markDiv = document.querySelector("div.main-page form.update-car>div:nth-child(1)>div ")
                const markInput = document.querySelector("div.main-page form.update-car>div:nth-child(1)>div  input")

                markDiv.style.border = "1px solid red";

                markInput.addEventListener("focus", () => {
                    if (markDiv.style.border == "1px solid red") markDiv.style.border = "none";
                })
                err += result.errors.Mark + '\n'
            }
            if (result.errors.Model != undefined) {
                const modelDiv = document.querySelector("div.main-page form.update-car>div:nth-child(2)>div")
                const modelInput = document.querySelector("div.main-page form.update-car>div:nth-child(2)>div input")

                modelDiv.style.border = "1px solid red";

                modelInput.addEventListener("focus", () => {
                    if (modelDiv.style.border == "1px solid red") modelDiv.style.border = "none";
                })
                err += result.errors.Model + '\n'
            }
            if (result.errors.Year != undefined) {
                const yearDiv = document.querySelector("div.main-page form.update-car>div:nth-child(3)>div")
                const yearInput = document.querySelector("div.main-page form.update-car>div:nth-child(3)>div input")

                yearDiv.style.border = "1px solid red";

                yearInput.addEventListener("focus", () => {
                    if (yearDiv.style.border == "1px solid red") yearDiv.style.border = "none";
                })
                err += result.errors.Year + '\n'
            }
            if (result.errors.Price != undefined) {
                const priceDiv = document.querySelector("div.main-page form.update-car>div:nth-child(4)>div")
                const priceInput = document.querySelector("div.main-page form.update-car>div:nth-child(4)>div input")

                priceDiv.style.border = "1px solid red";

                priceInput.addEventListener("focus", () => {
                    if (priceDiv.style.border == "1px solid red") priceDiv.style.border = "none";
                })
                err += result.errors.Price + '\n'
            }
            if (result.errors.About != undefined) {
                err += result.errors.About + '\n'
            }
            if (err != "") alert(err);
        }
    }
    var data;
    const takeCar = async () => {
        data = await fetch(`https://kursova.azurewebsites.net/api/Autos/id?id=${id}`);
        setCar(await data.json());
    }
    useEffect(() => {
        takeCar();
    }, [])
    return (
        <div className="main-page">
            <form className="update-car" onSubmit={handleSubmit(updateCar)}>
                <div><div><input {...register("mark")} placeholder="Mark" ></input></div><input value={car.mark} ></input></div>
                <div><div><input {...register("model")} placeholder="Model"></input></div><input value={car.model} ></input></div>
                <div><div><input {...register("year")} type="number" placeholder="Year" ></input></div><input value={car.year} ></input></div>
                <div><div><input {...register("price")} type="number" placeholder="Price" ></input></div><input value={car.price} ></input></div>
                <div><select {...register("colorId")} >
                    <option value={0}></option>
                    <option value={1}>Blue</option>
                    <option value={2}>Yellow</option>
                    <option value={3}>Gray</option>
                    <option value={4}>White</option>
                    <option value={5}>Black</option>
                    <option value={6}>Green</option>
                    <option value={7}>Red</option>
                </select>
                    <select value={car.colorId}>
                        <option value={1}>Blue</option>
                        <option value={2}>Yellow</option>
                        <option value={3}>Gray</option>
                        <option value={4}>White</option>
                        <option value={5}>Black</option>
                        <option value={6}>Green</option>
                        <option value={7}>Red</option>
                    </select>
                </div>
                <div><div><input {...register("image")} type="url" placeholder="Url" ></input></div><input value={car.image} ></input></div>
                <div><textarea {...register("about")} placeholder="About"></textarea><textarea value={car.about}></textarea></div>
                <div className="buttons">
                    <button type="submit">Update</button>
                    <button onClick={() => { navigate(-1) }}>Back</button>
                </div>
            </form>
        </div>
    );
}