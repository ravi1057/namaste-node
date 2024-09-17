require("./abc.js");

// const { x, calculateSum } = require("./calculate/sum.js");
// const { calculateMultiply } = require("./calculate/multiply.js");

const { calculateSum, calculateMultiply } = require("./calculate");
const data = require("./data.json");

// import { x, calculateMultiply } from "./mul.js";
console.log(JSON.stringify(data));

var name = "namaste nodejs";

var a = 10;

var b = 30;

calculateSum(a, b);
calculateMultiply(a, b);


const wrapper = [
  '(function (exports, require, module, __filename, __dirname) { ',
  '\n});',
];
console.log(wrapper[0]);
console.log(wrapper[1])
