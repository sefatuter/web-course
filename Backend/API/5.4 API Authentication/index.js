import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "test";
const yourPassword = "test";
const yourAPIKey = "95e9bdfa-f44c-4d8e-b9c9-9782b3c5b737";
const yourBearerToken = "a44f5a61-38bf-488d-ab53-e71d222177c4";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  const response = await axios.get(API_URL+'/random');
  //The data you get back should be sent to the ejs file as "content"
  const x = JSON.stringify(response.data);
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  res.render("index.ejs", { content: x });
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  const URL = API_URL+'/all?page=2';
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  const result = await axios.get(URL, {
    auth: {
      username: yourUsername,
      password: yourPassword,
    },
  });

  const x = JSON.stringify(result.data);  
  res.render("index.ejs", { content: x });
  
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
 
 //My ans
  // const filterURL = `${API_URL}/filter?score=5&apiKey=${yourAPIKey}`;
  // const filterResponse = await axios.get(filterURL);

  const result = await axios.get(API_URL + `/filter`, {
    params: {
      score: 5,
      apiKey: yourAPIKey,
    },
  });

  res.render("index.ejs", { content: JSON.stringify(result.data)});

  //HINT: You need to provide a query parameter of apiKey in the request.

  // const x = JSON.stringify(filterResponse.data);  
  // res.render("index.ejs", { content: x });

});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  const URL = API_URL+'/secrets/2';

  const response = await axios.get(URL, {
    headers: { 
      Authorization: `Bearer ${yourBearerToken}`  // space !!
    },
  });

  const x = JSON.stringify(response.data);  
  res.render("index.ejs", { content: x });
  
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
