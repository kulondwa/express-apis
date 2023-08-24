// first test with express users api
// const express = require("express");
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use("/api/users", require("./routes/api/users"));

// app.listen(3000, () => {
//   console.log("server runnning on port 3000");
// });

const bodyParser = require("body-parser");
// const express = require("express");
// const app = express();
// const port = 8000;
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// // api for user
// app.use("/api/users", require("./routes/api/users"));

// //api for movies
// app.use("/api/movies", require("./routes/api/movies"));

// // jwt api
// app.use("/api/authentification", require("./routes/api/jwt"));

// // mongodb usage api
// app.use("/api/mongo/", require("./routes/api/mongo"));

// app.listen(port, () => {
//   console.log(`the server listens to the port ${port}`);
// });

// const express = require("express");
// var app = express();
// const port = 8000;
// const handlebars = require("handlebars");
// const path = require("path");
// const exphbs = require("express-handlebars");
// const {
//   allowInscurePrototypeAccess,
// } = require("@handlebars/allow-prototype-access");
// const bodyparser = require("body-parser");

// app.use(bodyparser.urlencoded({ extended: false }));
// app.use(bodyparser.json());

// app.get("/", (req, res) => {
//   res.send("<p>hello world !</p>");
// });

// app.set("views", path.join(__dirname, "/views/"));
// app.engine(
//   "hbs",
//   exphbs({
//     handlebars: allowInscurePrototypeAccess,
//     extname: "hbs",
//     defaultLayout: "MainLayout",
//     layoutsDir: __dirname + "/views/layouts",
//   })
// );
// app.set("view engine", "hbs");

// app.listen(port, () => {
//   console.log(`the server is listening on the port ${port}`);
// });
