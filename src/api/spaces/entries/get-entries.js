import { getSessionBySpace } from '../../../session';
import { SYS, PAGINATION } from '../../utils';

export default async (req, res) => {
  const db = getSessionBySpace(req.session.space);
  const items = await db.entries.find({});

  res.json({
    ...SYS.ARRAY(),
    ...PAGINATION(items, req.query),
    items
  });
};
