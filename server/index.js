const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Server Started Successfully" });
});
const port = 4000;
app.listen(port, () => console.log(`Server is Started on Port: ${port}`));
