import { Router } from "express";

import { healthRouter } from "./healthRouter";

export const v1 = Router();

healthRouter(v1);
