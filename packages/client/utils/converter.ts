export const removeFalsyFields = (object: any) => {
  return Object.entries(object).reduce((result: any, [key, value]) => {
    if (value) {
      result[key] = value;
    }

    return result;
  }, {});
};
