const fs = require("fs");

const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("1-cryptoPBKBF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("2-cryptoPBKBF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("3-cryptoPBKBF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("4-cryptoPBKBF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("5-cryptoPBKBF2 done");
});
