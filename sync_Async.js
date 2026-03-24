const fs = require("fs");
const os = require("os")

// Blocking...
console.log(1);
const result = fs.readFileSync("contact.txt", "utf-8");
console.log(result);
console.log(2);

// Blockong OR Sync OutPut like this

// 1
// Alok = +91 9958398488
// John = +91 9958398422
// 2

// Non-Blocking...
console.log(1);
fs.readFile("contact.txt", "utf-8", (err, results) => {
  console.log(results);
});
console.log(2);

// Non_Blocking OR Async OutPut like this
// 1
// 2
// Alok = +91 9958398488
// John = +91 9958398422


console.log(os.cpus().length);