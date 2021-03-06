const db = require("./server/db");
const {
  Organization,
  Project,
  Issue,
  User,
  UserProject
} = require("./server/db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db has been synced!");

  console.log("seeded successfully");
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

//execute the 'seed' function,

if (module === require.main) {
  runSeed();
}

module.exports = seed;
