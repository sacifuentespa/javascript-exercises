const convertToCelsius = function(temperature) {
  celsius = ((temperature)-32)/1.8;
  return +celsius.toFixed(1);
};

const convertToFahrenheit = function(temperature) {
  fahrenheit = (temperature*1.8)+32;
  return +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
