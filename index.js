import express from "express";
import { MongoClient } from "mongodb";
import moviesRouter from "./routers/movies.routers.js"
import usersRouter from "./routers/users.routers.js"
import * as dotenv from 'dotenv'
dotenv.config()
import cors from "cors"

const app = express();
app.use(cors())
const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("Mongo is connected 🚀😎🎇");

app.use(express.json())
app.get("/", function (request, response) {
    response.send("node connect with mongo That so cool pretty man🚀🎯😎");
});
app.use('/movies', moviesRouter)
app.use('/users', usersRouter)
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
export { client };

