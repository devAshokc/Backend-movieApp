import express from "express";
import { CreatePizzas, getAllPizzas, getAllPizzasById } from "../service/pizzas.service.js";
const router = express.Router()


// post
router.post("/", async function (request, response) {
    const data = request.body;
    console.log(data)
    const result = await CreatePizzas(data)
    response.send(result)
});

router.get("/:id", async function (request, response) {
    const { id } = request.params
    console.log(id)
    // db.movies.findOne()
    const movie = await getAllPizzasById(id)
    // const movie = movies.find((mv) => mv.id === id)
    movie ? response.send(movie) : response.status(404).send({ msg: " movie not found" })
    console.log(movie)
});
// display all the movies list
router.get("/", async function (request, response) {
    // db.movies.find({})
    // Cursor -> pageination | toArray()
    if (request.query.rating) {
        // request.query.rating = +request.query.rating
        request.query.rating = parseInt(request.query.rating)
    }
    console.log(request.query)
    const movies = await getAllPizzas(request)
    response.send(movies);
});

export default router;


