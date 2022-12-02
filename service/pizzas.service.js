import { client } from "../index.js";

export async function CreatePizzas(data) {
    return await client.db("b39wd").collection("pizzas").insertMany(data);
}
export async function getAllPizzas(request) {
    return await client.db("b39wd").collection("pizzas").find(request.query).toArray();
}
export async function getAllPizzasById(id) {
    return await client.db("b39wd").collection("pizzas").findOne({ id: id });
}