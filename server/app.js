const express = require("express");
const app = express();
const http = require("http");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const port = 8080;

http
  .createServer(app)
  .listen(port)
  .on("listening", () => {
    console.log(`Listening on http://localhost:${port}`);
  })
  .on("error", (err) => {
    console.log(err);
  });

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api", require("./src/endpoints"));
