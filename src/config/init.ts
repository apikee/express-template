import cluster from "cluster";
import os from "os";
import mongoose from "mongoose";

import { environment } from "../config/environment";
import { app } from "./express";

export const init = () => {
  if (environment.nodeEnv === "production" && cluster.isPrimary) {
    const numberOfCores = os.cpus().length;

    // Start process for each CPU core
    for (let i = 0; i < numberOfCores; i++) {
      cluster.fork();
    }

    // When worker die, restart it
    cluster.on("exit", (worker, code, signal) => {
      console.log(
        `Worker ${worker.process.pid} exited\nCode: ${code}\nSignal: ${signal}\nForking new worker...`
      );
      cluster.fork();
    });
  } else {
    // Connect to database
    mongoose
      .connect(environment.mongoConnection)
      .then(() => console.log(`Worker ${process.pid} - Database connected`))
      .catch((err) =>
        console.log(
          `Worker ${process.pid} - Database connection failed\n\n`,
          err
        )
      );

    // Bootstrap express process
    app.listen(environment.port, () =>
      console.log(
        `Worker ${process.pid} is running on port ${environment.port}`
      )
    );
  }
};
