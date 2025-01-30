const convertToCelsius = function(f) {
  // formula - (F -32) * 5/9 = C
  return +((f -32) * (5/9)).toFixed(1);
};

const convertToFahrenheit = function(c) {
  // formula - (C * 9/5) + 32 = F
  return +((c * (9/5)) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
