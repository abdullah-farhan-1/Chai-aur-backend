import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";

const app = express();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Database connected. DB HOST is: ${connectionInstance.connection.host}`
    );

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on PORT ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    process.exit(1);
  }
};

export default connectDB;
