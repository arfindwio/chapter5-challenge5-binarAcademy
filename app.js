require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const { PORT = 3000 } = process.env;
const router = require("./routes");

app.use(morgan("dev"));
app.use(express.json());

app.use(router);

// 404 error handling
app.use((req, res, next) => {
  res.status(404).json({
    status: false,
    message: "Not Found",
    data: null,
  });
});

// 500 error handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    status: false,
    message: "Internal Server Error",
    data: err.message,
  });
});

app.listen(PORT, () => console.log("listening on port", PORT));
