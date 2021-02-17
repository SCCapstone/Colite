const db = require("../models");
const Map = db.maps;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");
const { QueryTypes } = require('sequelize');

const sequelize = new Sequelize(
  "DB_A6F8C3_EByteDB",
  "DB_A6F8C3_EByteDB_admin",
  "@002Super",
  {
    host: "208.118.63.190",
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
