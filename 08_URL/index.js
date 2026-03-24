const http = require("http");
const fs = require("fs");
const url = require("url");

// We can send different response for different url visit using switch case.
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req received\n`;
  const myUrl = url.parse(req.url);
  console.log(myUrl)
  fs.appendFile("./log.txt", log, (err, data) => {
    switch(myUrl.pathname) {
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