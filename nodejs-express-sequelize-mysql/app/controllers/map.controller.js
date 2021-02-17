const db = require("../models");
const Map = db.maps;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");
const { QueryTypes } = require('sequelize');

const sequelize = new Sequelize(
  "proof-of-concept-2",
  "admin123",
  "@ColiteTech!",
  {
    host: "172.31.16.0",
    dialect: "mssql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

exports.findAll = async (req, res) => {
  const maps = await sequelize.query("SELECT * FROM Map", {
    type: QueryTypes.SELECT,
  });
  res.send(maps);
};
