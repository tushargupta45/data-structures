var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let units = 0;
  let currentIndex = 0;
  let iterations = 0;
  boxTypes.forEach((box, i) => (iterations += box[0]));
  for (let i = 0; i < Math.min(iterations, truckSize); i++) {
    if (boxTypes[currentIndex][0] > 0) {
      boxTypes[currentIndex][0]--;
      units += boxTypes[currentIndex][1];
    } else if (boxTypes[currentIndex + 1]) {
      boxTypes[currentIndex + 1][0]--;
      units += boxTypes[currentIndex + 1][1];
      currentIndex++;
    }
  }
  return units;
};
