const repeatString = function (stringToRepeat, timesToRepeat) {
  let builtString = "";

  if (timesToRepeat < 0) return "ERROR";

  for (let i = 0; i < timesToRepeat; i++) {
    builtString += stringToRepeat;
  }
  return builtString;
};

// Do not edit below this line
module.exports = repeatString;
