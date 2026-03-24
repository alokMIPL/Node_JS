const http = require("http");
const fs = require("fs");

// const myServer = http.createServer((req, res) => {
//   console.log("New Request Rec...");
//   res.end("Hello From Server");
// })

// in console we get all things present in request
// const myServer = http.createServer((req, res) => {
//   console.log(req);
//   res.end("Hello From Server");
// })


// One Task we make a server and know the request on that server.
// const myServer = http.createServer((req, res) => {
//   const log = `${Date.now()}: New Req received\n`;
//   fs.appendFile("./log.txt", log, (err, data) => {
//     res.end("Hello From Server");
//   })
// })

// We also know the path of that to which the use visit.
// const myServer = http.createServer((req, res) => {
//   const log = `${Date.now()}: ${req.url} New Req received\n`;
//   fs.appendFile("./log.txt", log, (err, data) => {
//     res.end("Hello From Server");
//   })
// })


// We can send different response for different url visit using switch case.
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req received\n`;
  fs.appendFile("./log.txt", log, (err, data) => {
    switch(req.url) {
      case "/" : res.end("Home page");
      break;
      case "/about" : res.end("About page");
      break;
      case "/contact" : res.end("Contact page");
      break;
      case "/booking" : res.end("Booking page");
      break;
      default : res.end("400 Not Found.");
    }
  })
})


myServer.listen(8000, () => {
  console.log("Server Started>>>>>")
})