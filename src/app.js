import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

//initialize express app
const app = express();

//configuration for cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, //sets origin so that only allowed endpoints, like the frontend, can access our API
    credentials: true,
  })
);

//configuration to accept JSON data for our express app and restricts the maximum size of the JSON payload that can be sent in request body to 16kb.
app.use(express.json({ limit: "16kb" }));

//configuration to accept URL data for our express app
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//configuration to serve static files from the public directory
app.use(express.static("public"));

//configure cookie-parser
app.use(cookieParser());

export default app;
