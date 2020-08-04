const Sequelize = require("sequelize");
const db = require("../db");

const Issue = db.define("issue", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  status: {
    type: Sequelize.ENUM(
      "Open",
      "In progress",
      "To be tested",
      "Reopen",
      "Closed"
    ),
    allowNull: false
  },
  severity: {
    type: Sequelize.ENUM("Minor", "Medium", "Pressing", "Critical"),
    allowNull: false
  },
  deadline: {
    type: Sequelize.DATE
  }
});

module.exports = Issue;
