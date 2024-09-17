const crypto = require("crypto");

console.log("Hello,World");

var a = 12345;
var b = 56723;

//pbkbf2 -Password Base key Derivative function

//Synchronus function-Will Block the main thread -Don't use it

crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First Key is Generated");

setTimeout(()=>{
  console.log("call me right now!!!")
},0) //it will only be called once call stack main thread is empty

//Async function

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("Second Key is generated");
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is :", c);
