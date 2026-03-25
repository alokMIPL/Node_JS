const http = require("http");
const fs = require("fs");
const url = require("url");

// using different Search Query
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl)
  fs.appendFile("./log.txt", log, (err, data) => {
    switch(myUrl.pathname) {
      case "/" : res.end("Home page");
      break;
      case "/about" :
        const username = myUrl.query.username
        res.end(`Hi ${username}`);
        // res.end("About page");
        // we use this url http://localhost:8000/about?username=alok&userId=20&age=30&search=ball
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