const fs = require("fs");
const https = require("https");

console.log("Hello,World");

var a = 23456;

var b = 43214;

//Synchronus function

fs.readFileSync("./file.txt", "utf-8"); //10 ms
console.log("This will execute only file read");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(() => {
  console.log("SetTimeout called after 5 seconds");
}, 5000);

//Async function

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Data:", data);
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}
var c = multiplyFn(a, b);
console.log("Multiplication result is :", c);
