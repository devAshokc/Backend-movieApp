// const express = require("express");
import express from "express";
import { MongoClient } from "mongodb";
import moviesRouter from "./routers/movies.routers.js"
import * as dotenv from 'dotenv'
dotenv.config()
const app = express();

// const PORT = 4000;
const PORT = process.env.PORT;
console.log(process.env)

// MONGO_URL = "mongodb://127.0.0.1"
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("Mongo is connected 😎🎇");

// express.json()-> middleware which is inbuild,  it converts data to json
// app.use()-> intercept -> applies all express.json()
app.use(express.json())

app.get("/", function (request, response) {
    response.send("node connect with mongo That so cool pretty🚀🎯😎");
});
app.use('/movies', moviesRouter)

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export { client };

// GET
// POST
// Put
// Delete