/**
 * a=100
 * Last Line of the File
 * File Reading CB
 * TIme expired
 * setImmediate
 */

const fs = require("fs")
const a = 100;

setImmediate(()=>console.log("setImmediate"));

fs.readFile("./file.txt","utf8",()=>{
    console.log("File Reading CB")
});

setTimeout(()=>console.log("Time expired"),0);

function printA(){
    console.log("a=",a)
}
printA();
console.log("Last Line of the File")
