import express from "express";
import { getEntries } from "./entries";

const PATH = {
  ENTRIES: "/entries",
  ENTRY: "/entries/:entryId"
};

const router = express.Router({ mergeParams: true });

router.get(PATH.ENTRIES, getEntries);

export default router;
