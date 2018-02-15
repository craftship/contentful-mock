import { createSession } from "./session";
import cors from 'cors';
import defaultExpress from "express";
import defaultApi from "./api";

const sessions = new Map();

export default (
  path = process.env.CONTENTFUL_MOCK_DIR,
  port = 8090,
  express = defaultExpress,
  api = defaultApi
) => {
  const app = express();
  app.use(cors());

  const session = createSession(path);

  app.use((req, res, next) => {
    req.session = session;

    next();
  });

  app.use(api);
  app.listen(port, () => {
    console.log(`Contentful Mock Server Started | ${port}`);
  });
};
