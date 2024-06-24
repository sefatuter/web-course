//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var password = "";

app.use(bodyParser.urlencoded({ extended: true })); // parse encoded url data, middleware


function checkPassword(req, res, next) { // created own Middleware
    console.log(req.body);
    password = req.body["password"];
    next();
  }
  
  app.use(checkPassword);


  // GET request in index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (password === "ILoveProgramming" ){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.sendFile(__dirname + "/public/index.html");
    //Alternatively res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  