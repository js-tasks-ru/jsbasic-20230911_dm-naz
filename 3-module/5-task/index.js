function getMinMax(str) {
  let numArray = str
    .split(" ")
    .filter(item => isFinite(item))
    .map(item => parseFloat(item))
    .sort((a, b) => a - b);

  return result = {
    min: numArray.at(0),
    max: numArray.at(-1)
  };
}
