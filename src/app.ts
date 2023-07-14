import express from "express";
import dotenv from "dotenv";
import "./utils/env";
import notFoundMiddleware from "./middlewares/not-found.middleware";
import routers from "./routes/index";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routers);
app.use(notFoundMiddleware);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;