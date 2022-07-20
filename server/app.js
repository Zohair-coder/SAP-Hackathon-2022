const app = require("express")();
const http = require("http");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");
const authenticate = require("./src/auth");

const port = 8080;

http
  .createServer(app)
  .listen(port)
  .on("listening", () => {
    console.log(`Listening on port ${port}`);
  })
  .on("error", (err) => {
    console.log(err);
  });

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

require("./src/endpoints")(app);
