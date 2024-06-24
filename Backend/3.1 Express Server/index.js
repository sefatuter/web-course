import express from "express"; // 
const app = express(); // Creating app using express
const port = 3000; // Port listening


app.listen(port, () => {
  console.log(`Server running on port ${port}.`); // Callback function
});
