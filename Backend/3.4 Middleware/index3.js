import express from "express";

const app = express();
const port = 3000;

//
function logger (req, res, next) {
  console.log("Request method: ", req.method); // Request method:  GET
  console.log("Request URL: ", req.url);       // Request URL:  /
  next(); // !! Dont forget
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello GET works"); //
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
