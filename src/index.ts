import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import CarController from "./Cars/CarControllers";
import mongoose from "mongoose";
import logger from "./helper/logger";
import { ErrorHandlerMiddleware } from "./middlewares";

const app = express();

app.use(cors());
// for all app use cors middle ware
app.use(express.json());
app.use("/cars", CarController);

app.use(ErrorHandlerMiddleware);

mongoose
  .connect(
    "mongodb://localhost:27017/?authSource=admin",
    {
      autoIndex: true,
    }
  )
  .then(() => {
    console.log("connected to database");
    app.listen(3001, () => {
      logger.info("server is run on port 3001");
    });
  })
  .catch((err) => {
    logger.error("error", err);
  });


