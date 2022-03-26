export const initFields = (fieldSize, initialPositoin) => {
  const fields = [];
  for (let i = 0; i < fieldSize; i++) {
    const cols = new Array(fieldSize).fill("");
    fields.push(cols);
  }
  fields[initialPositoin.y][initialPositoin.x] = "snake";

  return fields;
};
