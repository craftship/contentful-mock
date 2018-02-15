import { getSessionBySpace } from '../../../session';
import { SYS, LINK_TYPE, ERROR_RESPONSES } from '../../utils';

export default async (req, res) => {
  const db = getSessionBySpace(req.session.space);
  const id = req.params.entryId;
  const item = await db.entries.findOne({ id });

  if (!item) {
    return res.status(404).json(
      ERROR_RESPONSES.NOT_FOUND(
        req.session.space, LINK_TYPE.SPACE
      )
    );
  }

  return res.json({
    ...SYS.LINK(
      LINK_TYPE.SPACE,
      req.session.space,
    ),
    ...item,
  });
};
