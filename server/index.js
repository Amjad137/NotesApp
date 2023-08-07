const express = require("express");
import cors from "cors";
import helmet from "helmet";
//API
import Notes from "./APIs/Notes";

//DB
const dbConnection = require("./database/connection");
dbConnection();

const app = express();

app.use(express.json());
app.use(cors()); // to allow Cross Origin Resource Sharing
app.use(helmet()); // to comply with web security standards
app.use(express.urlencoded({ extended: false }));

//Route
app.use("/notes", Notes);

app.get("/", (req, res) => {
  res.json({ message: "Server Started Successfully" });
});
const port = 4000;
app.listen(port, () => console.log(`Server is Started on Port: ${port}`));
