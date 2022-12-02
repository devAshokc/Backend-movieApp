import express from "express";
import { CreateUsers, getUserByName } from "../service/users.service.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
const router = express.Router()

async function getHashedPassword(password) {
    const No_of_Rounds = 10;
    const salt = await bcrypt.genSalt(No_of_Rounds); //Random string
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(salt);
    console.log(hashedPassword)
    return hashedPassword
}

// post
router.post("/signup", async function (request, response) {
    const { username, password } = request.body;
    const userFromDB = await getUserByName(username)
    console.log(userFromDB)
    if (userFromDB) {
        response.status(400).send({ message: "Username already exists" })
    } else if (password.length < 8) {
        response.status(400).send({ message: "Password must be 8 characters" })
    } else {
        const hashPassword = await getHashedPassword(password)
        console.log(hashPassword, password)
        // db.users.insertOne([])
        const result = await CreateUsers({ username: username, password: hashPassword })
        response.send(result)
    }
});


router.post("/login", async function (request, response) {
    const { username, password } = request.body;
    const userFromDB = await getUserByName(username)
    console.log(userFromDB)
    if (!userFromDB) {
        response.status(400).send({ message: "Invalid Credentiales" })
    } else {
        const storedDBPassword = await userFromDB.password
        const isPaswordMatch = await bcrypt.compare(password, storedDBPassword)
        console.log(isPaswordMatch)
        if (isPaswordMatch) {
            const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY)
            response.send({ message: "Successful login 🎊🎊", token: token })
        } else {
            response.status(401).send({ message: "Invalid Crudentiales" })
        }
    }
});


export default router;


