const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// api for user
app.use("/api/users", require("./routes/api/users"));

//api for movies
app.use("/api/movies", require("./routes/api/movies"));

app.use("/authetification", require("./routes/api/jwt"));

app.listen(port, () => {
  console.log(`the server listens to the port ${port}`);
});
