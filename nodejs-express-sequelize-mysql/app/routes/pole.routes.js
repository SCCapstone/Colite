// where each aspect of the app is hosted
module.exports = app => {
    const poles = require("../controllers/pole.controller.js");

    var router = require("express").Router();

    // Create a new Pole
    router.post("/", poles.create);

    // Retrieve all poles
    router.get("/", poles.findAll);

    // Retrieve all published poles
    router.get("/published", poles.findAllPublished);

    // Retrieve a single Pole with id
    router.get("/:id", poles.findOne);

    // Update a Pole with id
    router.put("/:id", poles.update);

    // Delete a Pole with id
    router.delete("/:id", poles.delete);

    // Delete all poles
    router.delete("/", poles.deleteAll);

    app.use('/api/poles', router);
};