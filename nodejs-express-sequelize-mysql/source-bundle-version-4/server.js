const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("./app/models");
db.sequelize.sync( /*{ force: true }*/ ).then(() => {
    //console.log("Drop and re-sync db.");
});

var corsOptions = {
    origin: "http://colite-tech-deployment-v2.s3-website-us-east-1.amazonaws.com/"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to shbenzer's REST API with CRUD functionality" });
});

// include routes
require("./app/routes/pole.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});