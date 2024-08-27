//modules protected their varibles and functions from leaking

console.log("Sum code is executed");

function calculateSum(x, y) {
  const result = x + y;
  console.log(result);
}

//console.log(module.exports)  //module.exports give the empty object

module.exports = { calculateSum }; //This is the common js modules

// module.exports.x = x;
// module.exports.calculateSum = calculateSum;
