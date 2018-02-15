import express from 'express';
import getEntry from './get-entry';
import getEntries from './get-entries';

const PATH = {
  ENTRIES: "/",
  ENTRY: "/:entryId"
};

const router = express.Router({ mergeParams: true });

router.get(PATH.ENTRY, getEntry);
router.get(PATH.ENTRIES, getEntries);


export default router;
