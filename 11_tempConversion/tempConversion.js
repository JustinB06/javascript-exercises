const convertToCelsius = function (fahrenheitTemp) {
  let celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);

  /* Math.round() always rounds a number to the 
  nearest integer, so we multiply and divide by
  10 to preserve 1 decimal place.*/
  celsiusTemp = Math.round(celsiusTemp * 10) / 10;
  return celsiusTemp;
};

const convertToFahrenheit = function (celsiusTemp) {
  let fahrenheitTemp = celsiusTemp * (9 / 5) + 32;
  fahrenheitTemp = Math.round(fahrenheitTemp * 10) / 10;
  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
