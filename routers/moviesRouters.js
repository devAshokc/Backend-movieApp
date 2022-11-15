import express from "express";
import { client } from "../index.js";
const router = express.Router()

// movies id display in the page -> get
router.get("/:id", async function (request, response) {
    const { id } = request.params
    console.log(id)
    // db.movies.findOne()
    const movie = await client.db("b39wd").collection("movies").findOne({ id: id })
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
    const movies = await client.db("b39wd").collection("movies").find(request.query).toArray()
    response.send(movies);
});
// post
router.post("/", async function (request, response) {
    const data = request.body;
    console.log(data)
    // db.movies.insertMany([])
    const result = await client.db("b39wd").collection("movies").insertMany(data)
    response.send(result)
});

// Delete the movies Id 
router.delete("/:id", async function (request, response) {
    const { id } = request.params
    console.log(id)
    // db.movies.findOne()
    const result = await client.db("b39wd").collection("movies").deleteOne({ id: id })
    // const movie = movies.find((mv) => mv.id === id)
    result.deletedCount > 0 ? response.send({ msg: "Movie was deleted" }) :
        response.status(404).send({ msg: " Movie  has been not found" })
    console.log(result)
});
// Update
router.put("/:id", async function (request, response) {
    const { id } = request.params
    console.log(id)
    const data = request.body;
    console.log(data)
    // db.movies.updateOne({id: 103},{$set: data})
    const result = await client.db("b39wd").collection("movies").updateOne({ id: id }, { $set: data })
    // const movie = movies.find((mv) => mv.id === id)
    result.modifiedCount > 0 ? response.send({ msg: "Movie has been updated" }) : response.status(404).send({ msg: " movie not found" })
    console.log(result)
});

export default router;