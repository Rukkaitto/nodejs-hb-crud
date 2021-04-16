const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

const usersRepository = require("./repositories/users.repository");
const usersController = require("./controllers/users.controller");
const pagesController = require("./controllers/pages.controller");
const usersRoutes = require("./routes/users.routes");
const pagesRoutes = require("./routes/pages.routes");
const userModel = require("./models/users.model");

const viewExt = ".hbs";
const app = express();
const port = 3000;

app.engine(viewExt, exphbs({ extname: viewExt }));
app.set("view engine", viewExt);

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.use("/api/users", usersRoutes(express, usersController(usersRepository(userModel(mongoose)))));
app.use("/", pagesRoutes(express, pagesController(usersRepository)));

mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: "root",
    pass: "password",
  })
  .then(() => {
    console.log("Connected to database.");
  })
  .catch((error) => {
    console.log(`Could not connect to database: ${error}`);
  });

app.use((req, res) => {
  console.log("FALLBACK", req.method, req.url);
  res.status(404).send({ status: "Not Found" });
});

app.listen(port, () => {
  console.log(`Adresse du serveur: http://localhost:${port}`);
});
