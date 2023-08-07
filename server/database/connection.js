import mongoose from "mongoose";
require("dotenv").config();

function dbConnection() {
  const DB_URL = process.env.MONGO_URI;
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // serverSelectionTimeoutMS: 10000,
  });
}
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Errors"));

db.once("open", function () {
  console.log("DB Connected");
});

module.exports = dbConnection;

//This is a configuration file used to connect MongoDb
