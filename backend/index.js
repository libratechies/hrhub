import express from "express";
import { PORT, MONGODB_CONNECTION } from "./config.js";
import mongoose from "mongoose";
import { jobGenre } from "./models/jobGenre.js";
import { jobPost } from "./models/jobPost.js";

const app = express();

mongoose
  .connect(MONGODB_CONNECTION)
  .then(() => {
    console.log("app connected to the database");
    app.listen(PORT, () => {
      console.log(`Listening to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to HR Hub");
});

app.post("/genre", async (request, response) => {
  try {
    console.log(request);
    console.log(request.body.genreName);
    const newGenre = {
      genreName: request.body.genreName,
    };

    const genre = await jobGenre.create(newGenre);
    return response.status(201).send(genre);
  } catch (error) {
    console.log(error);
  }
});

app.get("/genre", async (request, response) => {
  try {
    const genres = await jobGenre.find({});
    return response.status(200).send(genres);
  } catch (error) {
    console.log(error);
  }
});

//job post
app.get("/jobpost", async (request, response) => {
  try {
    const jobpost = await jobPost.find({});
    return response.status(200).send(jobpost);
  } catch (error) {
    console.log(error);
  }
});

app.post("/jobpost", async (request, response) => {
  try {
    console.log(request);
    console.log(request.body.title);
    const newJobPost = {
      title: request.body.title,
      description: request.body.description,
      company: request.body.company,
      location: request.body.location,
    };
    const jobpost = await jobPost.create(newJobPost);
    return response.status(201).send(jobpost);
  } catch (error) {
    console.log(error);
  }
});
