const app = require("express")();
const port = 8080;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`App listening on port ${port}!`));
