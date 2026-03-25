const express = require("express");
const http = require("http")

const app = express();

// this is basically look like this
// app.METHOD(PATH, HANDLER)

app.get("/", (req,res) => {
  return res.send("Hello From Home Page")
});

app.get("/about", (req,res) => {
  return res.send("Hello From About Page")
});

app.get("/contact", (req,res) => {
  return res.send("Hello From Contact Page" + " Hey " + req.query.name + " You are " + req.query.age + " old ")
});
// we use this url http://localhost:8000/contact?name=alok&age=20


// In general we use like this 
// const myServer = http.createServer(app);
// myServer.listen(8000, () => {
//   console.log("Server Started...")
// })



// In express we don't need to make a varaible name myServer then assign to http.createServer
// we basically use
app.listen(8000, () => {
  console.log("Server started")
})