function endpoints(app) {
  app.get("/users/:id", (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint that gives user information'
    // #swagger.parameters['id'] = { description: 'ID of the user' }
    /* #swagger.parameters['filter'] = {
	       in: 'query',
               description: 'Add a filter',
               type: 'string'
    } */
    /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/User" },
               description: 'User information.' 
        } */
    const filter = req.query.filter;
    return res.status(200).send({
      name: "Jhon Doe",
      age: 29,
      parents: {
        father: "Simon Doe",
        mother: "Marie Doe",
      },
      diplomas: [
        {
          school: "XYZ University",
          year: 2020,
          completed: true,
          internship: {
            hours: 290,
            location: "XYZ Company",
          },
        },
      ],
    });
  });

  app.post("/users", (req, res) => {
    /* #swagger.tags = ['User']
       #swagger.description = 'Endpoint that adds a new user.' */

    /* #swagger.parameters['newUser'] = {
           in: 'body',
           description: 'Information about new user.',
           required: true,
           schema: { $ref: "#/definitions/AddUser" }
    } */

    const newUser = req.body;

    // #swagger.responses[201] = { description: 'User registration successful!' }
    return res
      .status(201)
      .send({ description: "User registration successful!" });
  });
}

module.exports = endpoints;
