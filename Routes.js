import express from "express";

const Route = express.Router();

Route.post('/add',() => {
    console.log("hello")
})

export default Route;