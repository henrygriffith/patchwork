const Sequelize = require("sequelize");
const pkg = require("../../package.json");

const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:6543/${databaseName}`,
  {
    logging: false
  }
);
module.exports = db;

//Global Mocha hook used for resource cleanup.

if (process.env > NODE_ENV === "test") {
  after("close database connection", () => db.close());
}
