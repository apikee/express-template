import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { v1 } from "../routers/v1";
import { error404 } from "../controllers/error404";
import { responses } from "../middlewares/responses";

export const app = express();

app.use(responses);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "2mb", extended: true }));
app.use(helmet());
app.use(morgan("dev", { skip: (req) => req.method === "OPTIONS" }));

app.use("/v1", v1);
app.use(error404);
