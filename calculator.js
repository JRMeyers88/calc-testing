'add strict';


module.exports.add = () => {
  return 1
};

module.exports.subtract = (first, second) => {
  return parseInt(first) - parseInt(second);
};

module.exports.multiply = (first, second) => {
  return parseInt(first)*parseInt(second);
}

module.exports.divide = (first, second) => {
  return parseInt(first) / parseInt(second);
}