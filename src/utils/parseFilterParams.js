const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isContactType = (type) => ['work', 'home', 'personal'].includes(type);
  if (isContactType(type)) return type;
};

const parseIsFavourite = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const isFavourite = (type) => ['true', 'false'].includes(type);
  if (!isFavourite) return;

  return type === 'true' ? true : false;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return { contactType: parsedContactType, isFavourite: parsedIsFavourite };
};
