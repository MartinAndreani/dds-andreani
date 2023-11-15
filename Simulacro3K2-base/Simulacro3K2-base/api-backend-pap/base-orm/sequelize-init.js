// configurar ORM sequelize
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite:" + process.env.base);


module.exports = {
  sequelize
};
