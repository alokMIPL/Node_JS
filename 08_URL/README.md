## Node.js PATH

### URL uniform Resource Locator

<img width="1267" height="864" alt="image" src="https://github.com/user-attachments/assets/87cdb1fb-ed82-47e3-8254-fdc77a0ee19b" />

#### Simple Path
* google.dev/about

#### Nested Path
* google.dev/about/1

#### Query Parameters
* google.dev/about?userId=1&a=2
* after ? Query Parameters
* we can pass any key-value in Query paramenter
* userId = 1 and a = 2

<img width="1641" height="436" alt="image" src="https://github.com/user-attachments/assets/8c2e387e-0aa9-4cf7-8bf9-f0d2a4d7bedf" />

```// using different Search Query
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
```