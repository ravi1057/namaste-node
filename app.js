require("./abc.js");

// const { x, calculateSum } = require("./calculate/sum.js");
// const { calculateMultiply } = require("./calculate/multiply.js");

const { calculateSum, calculateMultiply, } = require("./calculate/index.js");
const data = require("./data.json")

// import { x, calculateMultiply } from "./mul.js";
console.log(JSON.stringify(data))

var name = "namaste nodejs";

var a = 10;

var b = 30;


calculateSum(a, b);
calculateMultiply(a, b);

