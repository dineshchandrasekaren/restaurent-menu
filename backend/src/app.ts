import express, { json, urlencoded } from "express";
import cors from "cors";
import config from "./config";
import router from "./restaurant/restaurant.route";
import { errorHandler } from "./middlewares/error.middleware";

const corsOptions = {
  origin: config.UI_URL,
  credentials: true,
};

const createApp = () => {
  const app = express();

  app.use(cors(corsOptions));

  app.use(json());

  app.use(urlencoded({ extended: true }));

  app.use(errorHandler);

  // testing
  app.get("/", (req, res) => {
    res.status(200).redirect("/dinesh");
  });

  app.use("api/menu", router);

  return app;
};

export default createApp;
