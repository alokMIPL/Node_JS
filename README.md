# Node JS

# 1. Modules in Node.js

# 2. File Handling in Node.js

This project demonstrates how to use the built-in **File System (`fs`) module** in Node.js to perform basic file operations like:

* Create files
* Read files
* Write files
* Append data
* Understand Sync vs Async behavior

## Modules Used

```js
const fs = require("fs");
const { writeFile } = require("fs/promises");
```

* `fs` → Core module for file operations
* `fs/promises` → Promise-based async methods


## 1. Create / Write File

### Synchronous (Blocking)

```js
fs.writeFileSync("./text.txt", "Hey There");
```

* Blocks execution until file is written
* Returns nothing

### Asynchronous (Non-Blocking)

```js
fs.writeFile("./text.txt", "No Sync", (err) => {
  if (err) console.log(err);
});
```

* Does not block execution
* Uses callback to handle result

## 2. Read File

### Synchronous

```js
const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result);
```

* Returns data directly
* Execution waits until file is read


### Asynchronous

```js
fs.readFile("./contact.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(result);
  }
});
```

* Uses callback
* `err` → error object (if any)
* `result` → file content


## 3. Append File

>`writeFile` overwrites existing content

To **add data without deleting old content**, use:

### Synchronous (Blocking)

```js
fs.appendFileSync("./test.txt", `Hey Append \n`);
```

* Adds data to the file
* Creates file if it does not exist
* Blocks execution


### Asynchronous (Non-Blocking)

```js
fs.appendFile("./test.txt", `Hey Append \n`, (err) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Data appended successfully");
  }
});
```

* Does not block execution
* Uses callback
* Recommended for real applications

## 4. Copy File

```js
fs.cpSync("./test.txt", "./copy.txt");
```

* Copies content from `test.txt` → `copy.txt`
* Source file must exist

## 5. Delete File

```js
fs.unlinkSync("./copy.txt");
```

* Deletes the file permanently

## 6. File Information (Stats)

```js
console.log(fs.statSync("./test.txt"));
```

Returns details like:

* File size
* Created date
* Modified date
* Is file or directory


## 7. Create Directory

### Single Folder

```js
fs.mkdirSync("my-docs");
```

### Nested Folders (Recursive)

```js
fs.mkdirSync("my-docs/a/b", { recursive: true });
```

* Creates full folder structure automatically
* No error if parent folders don’t exist

## 8. Sync vs Async (Important)

| Feature      | Sync (Blocking) | Async (Non-Blocking) |
| ------------ | --------------- | -------------------- |
| Execution    | One by one      | Runs in background   |
| Performance  | Slower          | Faster               |
| Use Case     | Small scripts   | Real applications    |
| Return Value | Direct result   | Callback / Promise   |


## Important Notes

* Always use correct file path: `./test.txt`
* `appendFile` will NOT overwrite existing data
* `writeFile` WILL overwrite data
* `cpSync` requires source file to exist
* Use `{ recursive: true }` for nested folders

## Summary

* `writeFile` → Create/overwrite file
* `readFile` → Read file content
* `appendFile` → Add data
* `cpSync` → Copy file
* `unlinkSync` → Delete file
* `statSync` → File details
* `mkdirSync` → Create folders

## Example Use Cases

* Logging system
* File upload handling
* Data storage
* Config file reading

# 3. File Handling in Node.js

<img width="1151" height="675" alt="image" src="https://github.com/user-attachments/assets/af03a8a4-c34d-4cb7-a3c2-bce3b3c9e6c5" />

<img width="1178" height="642" alt="image" src="https://github.com/user-attachments/assets/76772600-4668-464a-927f-a1729426b9dc" />


