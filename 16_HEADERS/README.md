## Middleware Flow Explained

### Middleware 1

```js
app.use((req,res, next) => {
  console.log("Hello from middleware 1")
  next();
})
```

* Logs a message
* Calls `next()` → passes control to next middleware

---

### Middleware 2

```js
app.use((req,res, next) => {
  console.log("Hello from middleware 2")
  return res.json({ msg: "Hey" })
})
```

* Logs a message
* Sends a response
* Does NOT call `next()`
* Stops request from reaching routes


## Important Behavior

Because Middleware 2 sends a response:

The route below will **never execute**

```js
app.get("/api/users", (req, res) => {
  return res.json(users)
})
```

## How to Fix It

If you want the route to work, modify Middleware 2:

```js
app.use((req,res, next) => {
  console.log("Hello from middleware 2")
  next();
})
```

OR conditionally respond:

```js
app.use((req,res, next) => {
  if (req.path === "/test") {
    return res.json({ msg: "Hey" });
  }
  next();
})
```