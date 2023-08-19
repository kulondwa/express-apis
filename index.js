const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/movies", require("./routes/api/movies"));

app.listen(port, () => {
  console.log(`the server listens to the port ${port}`);
});
