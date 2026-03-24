# Node JS 07

## Basic Node.js HTTP Server

This project demonstrates how to create a simple HTTP server using Node.js.

```js
const http = require("http");
```

* `http` → Built-in Node.js module to create web servers


## How It Works

* A server is created using `http.createServer()`
* It listens for incoming requests on a specific port
* Sends a response back to the client


## Code Overview

```js
const http = require("http");

const myServer = http.createServer((req, res) => {
  console.log("New Request Rec...");
  res.end("Hello From Server");
});

myServer.listen(8000, () => {
  console.log("Server Started>>>>>");
});
```

## Key Concepts

* `createServer()` → Creates HTTP server
* `req` → Incoming request object
* `res` → Response object
* `res.end()` → Sends response to client
* `listen()` → Starts server on a port


## Output

* Terminal: `Server Started>>>>>`
* Browser: `Hello From Server`