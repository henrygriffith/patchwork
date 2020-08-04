const Sequelize = require("sequelize");
const db = require("../db");

const UserProject = db.define("userProject", {
  projectId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = UserProject;
