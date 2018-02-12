import express from "express";
import spaces from "./spaces";

const PATH = {
  SPACES: "/spaces/:spaceId"
};

const router = express.Router({ mergeParams: true });

router.use(PATH.SPACES, spaces);

export default router;
