import express from "express";
import entries from "./entries";

const PATH = {
  SPACE: "/:spaceId",
  ENTRIES: "/:spaceId/entries",
};

const router = express.Router({ mergeParams: true });

router.use(PATH.ENTRIES, entries);

export default router;
