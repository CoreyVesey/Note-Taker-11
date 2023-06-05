const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

const apiRouter = require("./routes/api-routes");
const htmlRouter = require("./routes/html-routes");

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(apiRouter);
app.use(htmlRouter);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
); 