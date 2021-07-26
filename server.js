const express = require("express");
const app = express();
const api = require("./server/route/api");

const mongoose = require("mongoose"); //allows communication with mondoDB
mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://localhost/AuthenticationFormDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); //here we define the our Data connection (here is in our localhost)

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

app.use("/", api);

app.listen(8080, () => {
  console.log(`Running on port 8080`);
});
