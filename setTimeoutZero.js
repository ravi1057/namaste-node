console.log("Hello,World!");

var a = 123456;
var b = 34123;


//This callback will only be pushed to call stack in v8 once the call stack is empty    
setTimeout(() => {
  console.log("call me right now");
}, 0);

setTimeout(() => {
  console.log("Call me after 3 seconds");
}, 3000);

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);
console.log("Mutliplication result is:", c);
