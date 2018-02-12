export const SYS = {
  ARRAY: () => ({
    sys: {
      type: "Array"
    }
  }),
  LINK: (id, type) => ({
    sys: {
      id,
      type
    }
  })
};

export const PAGINATION = (items, { skip = 0, limit = 0 }) => ({
  total: parseInt(items.length),
  skip: parseInt(skip),
  limit: parseInt(limit)
});
