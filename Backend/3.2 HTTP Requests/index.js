import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>"); // send response
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Angela</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// 1. cd "project folder"
// 2. npm init -y ( setup npm )
// 3. npm i express ( install express )
// 4. npm i -g nodemon ( to create in time env ) 
// 5. node ./index.js
