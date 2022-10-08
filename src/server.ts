import express, { Express } from "express";
import "dotenv/config";
import "./paths";
import cors from "cors";
import routes from "./routes";

const createServer = () => {
  const allowOrigins = ["*"];
  const options: cors.CorsOptions = {
    origin: allowOrigins,
  };

  const app: Express = express();

  app.use(cors(options));
  app.use(express.json());
  app.use(routes);

  return app;
};

export default createServer;
