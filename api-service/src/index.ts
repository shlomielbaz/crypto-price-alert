import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import router from "./routes/home.routes";
import "./utils/websocket";

const app: Application = express();

const corsOptions: CorsOptions = {
  origin: process.env.UI_HOST,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', router);

export default app;