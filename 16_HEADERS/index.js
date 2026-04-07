const express = require("express");
const fs = require("fs")
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));


// In this middleware, we are not calling next() function, so the request will not reach to the routes and will be stuck in this middleware. So, we need to call next() function to pass the control to the next middleware or route handler.
// app.use((req,res, next) => {
//   console.log("Hello from middelware 1")
// })

// In this middleware, we return a response, so the request will not reach to the routes and will be stuck in this middleware.
// app.use((req,res, next) => {
//   console.log("Hello from middelware 1")
//   return res.json({ msg: "Hello from middleware 1" })
// })

// In this middleware, we are calling next() function, so the request will reach to the routes and will be processed by the route handler.
app.use((req,res, next) => {
  console.log("Hello from middelware 1")
  next();
})

// app.use((req,res, next) => {
//   console.log("Hello from middelware 2")
//   return res.json( { msg: "Hey" })
// })

// Custom Headers
app.get("/api/users", (req, res) => {
  res.setHeader("X-myHeader", "Hello from custom header"); //custom header
  // Whenever set a custom header, use X before the header name, so that it will be clear that this is a custom header and not a standard header.
  console.log(req.headers)
  // I get these headers in the request

  //  {
  //   purpose: 'Youtube Header From Request',
  //   'user-agent': 'PostmanRuntime/7.51.1',
  //   accept: '*/*',
  //   'cache-control': 'no-cache',
  //   'postman-token': '6d42baf2-5261-4e20-bd2b-7d437bb288cb',
  //   host: 'localhost:8000',
  //   'accept-encoding': 'gzip, deflate, br',
  //   connection: 'keep-alive'
  // }

  return res.json(users)
})

// Routes
app.get("/api/users", (req, res) => {
  return res.json(users)
})

app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `;
  res.send(html)
})

// Dynamic path parameters
// GET /api/users/:id
//  :id => varaible

app.get("/api/users/:id", (req,res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user)
})

app.post("/api/users", (req,res) => {
  const body = req.body;
  console.log("Body", body)
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "success", id: users.length });
  });
})


app.patch("/api/users/:id", (req,res) => {
  // TODO: edit new user
  return res.json({ status: "pending" })
})

app.delete("/api/users/:id", (req,res) => {
  // TODO: delete new user
  return res.json({ status: "pending" })
})

app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}`)
})