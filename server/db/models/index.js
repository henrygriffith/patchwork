const Organization = require("./organization");
const Project = require("./project");
const Issue = require("./issue");
const User = require("./user");
const UserProject = require("./userProject");

// DB Relationships/Associations

Organization.hasMany(Project);
Project.hasMany(Issue);
Project.belongsTo(UserProject);
User.belongsTo(UserProject);

module.exports = {
  Organization,
  Issue,
  Project,
  User
};
