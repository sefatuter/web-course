// Import Modules
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// Creating an instance of an Express application.
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

let currentUserId = 1;

let users = [
  { id: 1, name: "Angela", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");   // Performing a query to select all country codes from the visited_countries table.
  let countries = [];  // Initializing an empty array to store country codes.
  
  // Iterating over the query results and pushing each country code into the countries array.
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;   // Returning the array of country codes.
}
app.get("/", async (req, res) => {
  const countries = await checkVisisted();  // Calling the checkVisisted function to get the list of visited country codes.
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: "teal", // currentUser.color,
  });
    // Rendering the index.ejs template, passing in the list of countries, the total number of countries, the list of users, and a color.
});


app.post("/add", async (req, res) => {
  const input = req.body["country"];
  // Extracting the country name input from the request body.

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
          // Performing a query to find the country code for the given country name, ignoring case.
    );

    const data = result.rows[0];    // Extracting the first result from the query.
    const countryCode = data.country_code;    // Getting the country code from the query result.
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );
          // Inserting the country code into the visited_countries table.
      res.redirect("/");      // Redirecting the client to the root URL after the insertion.
    } catch (err) {
      console.log(err);      // Logging any errors that occur during the insertion.
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/user", async (req, res) => {


});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
