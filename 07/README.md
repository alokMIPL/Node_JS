## Node.js HTTP Server – Complete Learning Guide

## Modules Used

```js
const http = require("http");
const fs = require("fs");
```

* `http` → Create server and handle requests
* `fs` → Work with file system (logging requests)

## Learning Progress (Step-by-Step)

### 1. Basic Server

```js
const myServer = http.createServer((req, res) => {
  console.log("New Request Rec...");
  res.end("Hello From Server");
});
```

### 2. Inspect Full Request Object

```js
const myServer = http.createServer((req, res) => {
  console.log(req);
  res.end("Hello From Server");
});
```

###  3. Log Requests to File

```js
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: New Req received\n`;
  fs.appendFile("./log.txt", log, (err, data) => {
    res.end("Hello From Server");
  });
});
```

### 4. Log Request URL

```js
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req received\n`;
  fs.appendFile("./log.txt", log, (err, data) => {
    res.end("Hello From Server");
  });
});
```

### 5. Routing with Switch Case (Final Implementation)

```js
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req received\n`;

  fs.appendFile("./log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home page");
        break;
      case "/about":
        res.end("About page");
        break;
      case "/contact":
        res.end("Contact page");
        break;
      case "/booking":
        res.end("Booking page");
        break;
      default:
        res.end("400 Not Found.");
    }
  });
});
```
## Start Server

```js
myServer.listen(8000, () => {
  console.log("Server Started>>>>>");
});
```

## How to Run

1. Open terminal in project folder
2. Run:

```bash
node file.js
```

3. Open browser:

```
http://localhost:8000
```

## Available Routes

| URL        | Response      |
| ---------- | ------------- |
| `/`        | Home page     |
| `/about`   | About page    |
| `/contact` | Contact page  |
| `/booking` | Booking page  |
| Others     | 400 Not Found |


## Key Concepts Covered

* `http.createServer()` → Create server
* `req` → Request object
* `res` → Response object
* `req.url` → Requested route
* `res.end()` → Send response
* `fs.appendFile()` → Async logging
* Routing using `switch`