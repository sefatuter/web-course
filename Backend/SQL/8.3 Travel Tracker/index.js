import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world", 
  password: "sql1234",
  port: 5432,
});

db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.

  let countries = [];
  const result = await db.query("SELECT * FROM visited_countries");


  res.render('index.ejs')
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
