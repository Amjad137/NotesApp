const express = require("express");

//API
import Notes from "./APIs/Notes";

//DB
const dbConnection = require("./database/connection");
dbConnection();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//Route
app.use("/notes", Notes);

app.get("/", (req, res) => {
  res.json({ message: "Server Started Successfully" });
});
const port = 4000;
app.listen(port, () => console.log(`Server is Started on Port: ${port}`));
