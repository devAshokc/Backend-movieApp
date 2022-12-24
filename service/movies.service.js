import { client } from "../index.js";

export async function UpdateMoviesById(id, data) {
    return await client.db("b39wd").collection("movies").updateOne({ id: id }, { $set: data });
}
export async function deleteMoviesById(id) {
    return await client.db("b39wd").collection("movies").deleteOne({ id: id });
}
export async function CreateMovies(data) {
    return await client.db("b39wd").collection("movies").insertOne(data);
}
export async function getAllMovies(request) {
    return await client.db("b39wd").collection("movies").find(request.query).toArray();
}
export async function getAllMoviesById(id) {
    return await client.db("b39wd").collection("movies").findOne({ id: id });
}
