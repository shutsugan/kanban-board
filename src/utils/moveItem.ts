export const moveItem = <T>(array: T[], from: number, to: number) => {
  const newArray = [...array];
  const startIndex = to < 0 ? newArray.length + to : to;
  const item = newArray.splice(from, 1)[0];

  newArray.splice(startIndex, 0, item);
  return newArray;
};
