export const moveToFront = (array, itemToMove) => {
  const newArray = array.filter(item => item !== itemToMove);
  newArray.unshift(itemToMove);
  return newArray;
};
