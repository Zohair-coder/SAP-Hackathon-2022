db = require("./database/database");

function endpoints(app) {
  app.post("/api/register", (req, res) => {
    const { name, email, password } = req.body;
    try {
      db.registerUser(name, email, password);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.send("User registered");
  });

//   app.post("/api/login", async (req, res) => {
//     const { email, password } = req.body;
//     try {
//       const user = await db.loginUser(email, password);
//       if (user) {
//         res.send("User logged in");
//       }
//       res.status(401).send("User unauthorized");
//     } catch (err) {
//       console.log(err);
//       res.status(500).send(err);
//     }
//   });
// }

module.exports = endpoints;
