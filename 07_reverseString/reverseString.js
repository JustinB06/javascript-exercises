const reverseString = function (stringToReverse) {
  const stringCharArray = stringToReverse.split("");
  //stringCharArray.reverse();
  return stringCharArray.reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
