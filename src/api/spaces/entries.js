import { SYS, PAGINATION } from "../utils";
import { getSessionBySpace } from "../../session";

export const getEntries = async (req, res) => {
  const db = getSessionBySpace(req.session.space);
  const items = await db.entries.find({});

  res.json({
    ...SYS.ARRAY(),
    ...PAGINATION(items, req.query),
    items
  });
};
