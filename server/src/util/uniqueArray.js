export const contains = (arr, v) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === v) return true;
  }
  return false;
};
