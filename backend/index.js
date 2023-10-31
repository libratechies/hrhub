import express from "express";
import { PORT, MONGODB_CONNECTION } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to HR Hub');

})

mongoose.connect(MONGODB_CONNECTION)
    .then(() => {
        console.log("app connected to the database");
    })
    .catch((error) => {
        console.log(error)
    });

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})