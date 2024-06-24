import express from "express";
import morgan from "morgan"; // 

const app = express();
const port = 3000;
app.use(morgan("tiny")); // GET / 200 5 - 0.511 ms

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/", (req, res) => { // POST / 200 7 - 2.319 ms
  res.send("Posted.");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
