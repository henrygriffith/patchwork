const Sequelize = require("sequelize");
const db = requrie("../db");

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;
