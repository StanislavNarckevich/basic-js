const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity == Number) {
    let k = 0.693 / HALF_LIFE_PERIOD
    let t = Math.log(sampleActivity / MODERN_ACTIVITY) / k
    Math.ceil(t)
  }
  else {
    return false
  }
  return t
};
