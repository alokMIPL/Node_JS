const fs = require("fs")

// Blocking...
console.log(1)
const result = fs.readFileSync("contact.txt", "utf-8");
console.log(result)
console.log(2)