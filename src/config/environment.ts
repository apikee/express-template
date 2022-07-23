import dotenv from "dotenv";

dotenv.config();

import { NodeEnv } from "../types/NodeEnv";

const env = {
  nodeEnv: process.env.NODE_ENV as NodeEnv,
  port: (process.env.PORT as string) || 8080,
  mongoConnection: process.env.MONGO_CONNECTION!,
};

export type Environment = typeof env;

export const environment: Environment = env;
