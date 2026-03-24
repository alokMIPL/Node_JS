const fs = require("fs");
const { writeFile } = require("fs/promises");


// 1. Create File in Node

// This is sync... call
// fs.writeFileSync("./text.txt", "Hey There")


// This is Async
// fs.writeFile("./text.txt", "No Sync", (err) => {})

// 2. Read File in Node

// This is sync... call
const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result)
// when we use sync then it return the value in a variable.


// This is Async
fs.readFile("./contact.txt", "utf-8", (err, result) => {
  if(err) {
    console.log("Error", err)
  } else {
    console.log(result)
  }
})
// for Async he aspect a callback function and on that function it return the error or result value. 
// (err, result) => {
//   if(err) {
//     console.log("Error", err)
//   } else {
//     console.log(result)
//   }
// }

// same for fs.writeFileSync and writeFile

// Sync and Async or Blocking and Non-blocking



// 3. Append File in Node
// wehn we use writeFile or writeFileSync then it overRite the content.
// But i want that it add the new content and don't delete the older one so we use append

// fs.appendFileSync(".test.txt", new Date().getDate().toLocaleString());
fs.appendFileSync(".test.txt", `Hey Append \n`);