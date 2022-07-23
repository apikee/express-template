import { Router } from "express";

import { pingController } from "../controllers/health/ping.controller";

export const healthRouter = (router: Router) => {
  router.get("/ping", pingController);
};
