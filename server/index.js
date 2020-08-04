const path = require("path");
const express = require("express");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const morgan = require("morgan");
const session = require("express-session");
const PORT = 8000;
const app = express();

const createApp = () => {
  //logging middleware
  app.use(morgan("dev"));

  //body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //session middleware with passport

  //auth and api routes

  //static file-serving middleware
  app.use(express.static(path.join(__dirname, "..", "public")));

  //any remaining request with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      console.log(req.path);
      const err = new Error("Not Found");
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  //sends index.html
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public/index.html"));
  });

  //error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal servor error.");
  });
};

const startListening = () => {
  // start listening (and create a ''server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  );
  //set up our socket control center
};

const syncDB = () => db.sync();

async function bootApp() {
  await sessionStorage.sync();
  await syncDB();
  await createApp();
  await startListening();

  if (require.main === module) {
    bootApp();
  } else {
    createApp();
  }
}
module.exports = app;
