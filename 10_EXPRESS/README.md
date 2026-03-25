## Express in Node.js

## Understanding Query Parameters

You can pass data in the URL like this:

```bash
http://localhost:8000/contact?name=alok&age=20
```

* `name` → User name
* `age` → User age

Accessed in code using:

```js
req.query.name
req.query.age
```


## How Express Works

* Express handles routing using:

```js
app.get(PATH, HANDLER)
```

* Example:

```js
app.get("/about", (req, res) => {
  res.send("Hello From About Page");
});
```

* Server is started using:

```js
app.listen(8000, () => {
  console.log("Server started");
});
```
