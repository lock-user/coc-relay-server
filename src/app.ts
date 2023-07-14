import express from "express";
import dotenv from "dotenv";
import "./utils/env";
import errorHandlerMiddleware from "./middlewares/error-handler.middleware";
import notFoundMiddleware from "./middlewares/not-found.middleware";
import routers from "./routes/index";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routers);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

export default app;