const express = require("express");
const app = express();
const db = require("./Models/mongoose");
const user = require("./Routes/all");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(user);
app.use("/", (req, res) => {
  res.end("Chao ban toi la Brain");
});

db.connectToDatabase().then(() => {
  app.listen(4000, () => {
    console.log("success !");
  });
});
