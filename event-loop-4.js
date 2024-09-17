/**
 * Last Line of the Code
 * nextTick
 * inner nextTick
 * Promise
 *Timer expired
 *SetImmediate
 *File Reading CB
 **/

const fs = require("fs");

setImmediate(() => console.log("SetImmediate"));
setTimeout(() => console.log("Timer exired"), 0);
Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File Reading CB");
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  console.log("nextTick");
});
console.log("Last Line of the Code ");
