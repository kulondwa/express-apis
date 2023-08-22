const express = require("express");
var app = express();
const port = 8000;
const handlebars = require("handlebars");
const path = require("path");
const exphbs = require("express-handlebars");
const {
  allowInscurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("<p>hello world !</p>");
});

app.set("views", path.join(__dirname, "/views/"));
app.engine(
  "hbs",
  exphbs({
    handlebars: allowInscurePrototypeAccess,
    extname: "hbs",
    defaultLayout: "MainLayout",
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", "hbs");

app.listen(port, () => {
  console.log(`the server is listening on the port ${port}`);
});
