const convertToCelsius = function(degrees) {
  let celsius = (degrees - 32) * (5/9);
  return Number(celsius.toFixed(Number.isInteger(celsius) ? 0 : 1));
};

const convertToFahrenheit = function(degrees) {
  let fahrenheit = degrees * (9/5) + 32
  return Number(fahrenheit.toFixed(Number.isInteger(fahrenheit) ? 0 : 1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
