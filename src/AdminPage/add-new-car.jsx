import { useForm } from "react-hook-form";
import "./admin-page.css";
export default function Add_New_Car() {
    const { register, handleSubmit } = useForm();
    const addnewcar = async (car) => {
        const new_car = {
            mark: car.mark,
            model: car.model,
            price: car.price,
            year: car.year,
            image: car.url,
            colorId: car.color,
            about: car.about
        }
        console.log(new_car);
        let result = [];
        let data = await fetch("https://kursova.azurewebsites.net/api/Autos/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(new_car)
        })

        result = await data.json().catch((er) => { });
        console.log(result);
        let err = "";
        if (result != undefined) {
            if (result.Message != undefined) alert(result.Message);
            if (result.errors.Mark != undefined) {
                const markDiv = document.querySelector("div.main-page form.add-car>div:nth-child(1)")
                const markInput = document.querySelector("div.main-page form.add-car>div:nth-child(1) input")

                markDiv.style.border = "1px solid red";

                markInput.addEventListener("focus", () => {
                    if (markDiv.style.border == "1px solid red") markDiv.style.border = "none";
                })
                err += result.errors.Mark + '\n'
            }
            if (result.errors.Model != undefined) {
                const modelDiv = document.querySelector("div.main-page form.add-car>div:nth-child(2)")
                const modelInput = document.querySelector("div.main-page form.add-car>div:nth-child(2) input")

                modelDiv.style.border = "1px solid red";

                modelInput.addEventListener("focus", () => {
                    if (modelDiv.style.border == "1px solid red") modelDiv.style.border = "none";
                })
                err += result.errors.Model + '\n'
            }
            if (result.errors.Year != undefined) {
                const yearDiv = document.querySelector("div.main-page form.add-car>div:nth-child(3)")
                const yearInput = document.querySelector("div.main-page form.add-car>div:nth-child(3) input")

                yearDiv.style.border = "1px solid red";

                yearInput.addEventListener("focus", () => {
                    if (yearDiv.style.border == "1px solid red") yearDiv.style.border = "none";
                })
                err += result.errors.Year + '\n'
            }
            if (result.errors.Price != undefined) {
                const priceDiv = document.querySelector("div.main-page form.add-car>div:nth-child(4)")
                const priceInput = document.querySelector("div.main-page form.add-car>div:nth-child(4) input")

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
    return (
        <div className="main-page">
            <form className="add-car" onSubmit={handleSubmit(addnewcar)}>
                <div><input {...register("mark")} placeholder="Mark"></input></div>
                <div><input {...register("model")} placeholder="Model"></input></div>
                <div><input {...register("year")} type="number" placeholder="Year"></input></div>
                <div><input {...register("price")} type="number" placeholder="Price"></input></div>
                <select {...register("color")} >
                    <option value={1}>Blue</option>
                    <option value={2}>Yellow</option>
                    <option value={3}>Gray</option>
                    <option value={4}>White</option>
                    <option value={5}>Black</option>
                    <option value={6}>Green</option>
                    <option value={7}>Red</option>
                </select>
                <div><input {...register("url")} type="url" placeholder="Url"></input></div>
                <textarea {...register("about")} placeholder="About"></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}