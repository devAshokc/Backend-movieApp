// const express = require("express");
import express from "express";
import { MongoClient } from "mongodb";
import moviesRouter from "./routers/movies.routers.js"
import usersRouter from "./routers/users.routers.js"
import pizzasRouter from './routers/pizzas.routers.js'
import * as dotenv from 'dotenv'
dotenv.config()
// import bcrypt from "bcrypt"
import cors from "cors"
const app = express();
app.use(cors())
// const PORT = 4000;
const PORT = process.env.PORT;
// console.log(process.env)

// MONGO_URL = "mongodb://127.0.0.1"
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("Mongo is connected 🚀😎🎇");

// express.json()-> middleware which is inbuild,  it converts data to json
// app.use()-> intercept -> applies all express.json()
app.use(express.json())

app.get("/", function (request, response) {
    response.send("node connect with mongo That so cool pretty man🚀🎯😎");
});
app.use('/movies', moviesRouter)
app.use('/users', usersRouter)
app.use('/pizzas', pizzasRouter)
// const pizzas = [
//     {
//         id: "99",
//         name: "PEPPER BARBECUE CHICKEN",
//         Varients: [
//             "small",
//             "medium",
//             "large"
//         ],
//         prices: [
//             {
//                 "small": 200,
//                 "medium": 350,
//                 "large": 400
//             }
//         ],
//         category: "nonveg",
//         image: "https://img.freepik.com/free-photo/top-view-mixed-pizza-with-tomato-black-olive-melted-cheese_140725-10787.jpg?size=338&ext=jpg&ga=GA1.2.2047846769.1664917423",
//         description: "PEPPER BARBECUE CHICKEN"
//     },
//     {
//         id: "100",
//         name: "Chicken Golden Delight",
//         Varients: [
//             "small",
//             "medium",
//             "large"
//         ],
//         prices: [
//             {
//                 "small": 200,
//                 "medium": 350,
//                 "large": 400
//             }
//         ],
//         category: "nonveg",
//         image: "https://img.freepik.com/free-photo/top-view-pizza-with-salmon-philadelphia-cheese_140725-12443.jpg?size=338&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=ais",
//         description: "Chicken Golden Delight"
//     },
//     {
//         id: "101",
//         name: "CHICKEN SAUSAGE",
//         Varients: [
//             "small",
//             "medium",
//             "large"
//         ],
//         prices: [
//             {
//                 "small": 200,
//                 "medium": 350,
//                 "large": 400
//             }
//         ],
//         category: "nonveg",
//         image: "https://img.freepik.com/free-photo/top-view-mix-pizza-with-chicken-sausages-mushrooms-olives-board_140725-11548.jpg?size=338&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=sph",
//         description: "CHICKEN SAUSAGE"
//     },
//     {
//         id: "102",
//         name: "Indi Chicken Tikka",
//         Varients: [
//             "small",
//             "medium",
//             "large"
//         ],
//         prices: [
//             {
//                 "small": 200,
//                 "medium": 350,
//                 "large": 400
//             }
//         ],
//         category: "nonveg",
//         image: "https://img.freepik.com/free-photo/lahmajun-turkish-pizza-with-minced-meat_140725-181.jpg?size=338&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=ais",
//         description: "Indi Chicken Tikka"
//     },
//     {
//         id: "103",
//         name: "Peri-Peri Chicken",
//         Varients: [
//             "small",
//             "medium",
//             "large"
//         ],
//         prices: [
//             {
//                 "small": 200,
//                 "medium": 350,
//                 "large": 400
//             }
//         ],
//         category: "nonveg",
//         image: "https://img.freepik.com/premium-photo/peri-peri-hot-sour-pizza-with-tomato-sauce-mayo-isolated-wooden-board-top-view-italian-food-wooden-background_689047-1940.jpg?size=626&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=sph",
//         description: "Peri-Peri Chicken"
//     },
//     {
//         id: "104",
//         name: "CHEESE N CORN",
//         Varients: [
//             "small",
//             "medium",
//             "large"
//         ],
//         prices: [
//             {
//                 "small": 100,
//                 "medium": 250,
//                 "large": 350
//             }
//         ],
//         category: "veg",
//         image: "https://img.freepik.com/free-photo/top-view-italian-pizza-topped-with-french-fries_140725-7078.jpg?size=338&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=ais",
//         description: "CHEESE N CORN"
//     },
//     {
//         id: "105",
//         name: "Deluxe Veggie",
//         Varients: [
//             "small",
//             "medium",
//             "large"
//         ],
//         prices: [
//             {
//                 "small": 100,
//                 "medium": 250,
//                 "large": 350
//             }
//         ],
//         category: "veg",
//         image: "https://img.freepik.com/free-photo/pizza-with-peppers-olives-cheese_501050-854.jpg?size=626&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=sph",
//         description: "Deluxe Veggie"
//     },
//     {
//         id: "106",
//         name: "Peppy Paneer",
//         Varients: [
//             "small",
//             "medium",
//             "large"
//         ],
//         prices: [
//             {
//                 "small": 150,
//                 "medium": 250,
//                 "large": 350
//             }
//         ],
//         category: "veg",
//         image: "https://img.freepik.com/free-photo/top-view-lahmacun-with-parsley-lemon-ayran-rag-wooden-food-tray_176474-3388.jpg?size=338&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=ais",
//         description: "Peppy Paneer"
//     },
//     {
//         id: "107",
//         name: "Mexican Green Wave",
//         Varients: [
//             "small",
//             "medium",
//             "large"
//         ],
//         prices: [
//             {
//                 "small": 150,
//                 "medium": 250,
//                 "large": 350
//             }
//         ],
//         category: "veg",
//         image: "https://img.freepik.com/premium-photo/sliced-portion-spinach-tomatoes-pies-quiche-with-autumn-leaves-white-marble-table_721668-8.jpg?size=338&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=ais",
//         description: "Mexican Green Wave"
//     },
//     {
//         id: "108",
//         name: "Veg Extravaganza",
//         Varients: [
//             "small",
//             "medium",
//             "large"
//         ],
//         prices: [
//             {
//                 "small": 100,
//                 "medium": 250,
//                 "large": 350
//             }
//         ],
//         category: "veg",
//         image: "https://img.freepik.com/free-photo/top-view-mushroom-pizza-with-red-tomatoes-bell-peppers-olives-mushrooms-all-sliced-inside-with-oil-dark-desk-food-pizza-dough_140725-22888.jpg?size=626&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=ais",
//         description: "Veg Extravaganza"
//     }
// ]
// app.get("/pizzas", function (request, response) {
//     response.send(pizzas)
// })
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export { client };

// GET
// POST
// Put
// Delete