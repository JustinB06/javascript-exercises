const removeFromArray = function (inputArray, ...toRemove) {
  // Loop through elements that need to be removed
  for (elementToRemove of toRemove) {
    while (inputArray.includes(elementToRemove)) {
      let indexToRemove = inputArray.indexOf(elementToRemove);
      inputArray.splice(indexToRemove, 1);
    }
  }
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
