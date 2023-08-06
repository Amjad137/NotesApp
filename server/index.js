const express = require("express");

//DB
const dbConnection = require("./database/connection");
dbConnection();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Server Started Successfully" });
});
const port = 4000;
app.listen(port, () => console.log(`Server is Started on Port: ${port}`));
