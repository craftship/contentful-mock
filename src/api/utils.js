import uuid from "uuid/v1";

export const LINK_TYPE = {
  SPACE: "Space"
};

export const SYS = {
  ARRAY: () => ({
    sys: {
      type: "Array"
    }
  }),
  SPACE: id => ({
    sys: {
      type: "Space",
      id
    }
  }),
  LINK: (id, linkType) => ({
    sys: {
      id,
      linkType,
      type: "Link"
    }
  }),
  ERROR: id => ({
    sys: {
      id,
      type: "Error"
    }
  })
};

export const ERROR_RESPONSES = {
  NOT_FOUND: (id, type) => ({
    ...SYS.ERROR("NotFound"),
    message: "The resource could not be found.",
    details: {
      ...SYS.SPACE(id)
    },
    requestId: uuid().replace(/-/g, "")
  })
};

export const PAGINATION = (items, { skip = 0, limit = 0 }) => ({
  total: parseInt(items.length),
  skip: parseInt(skip),
  limit: parseInt(limit)
});
