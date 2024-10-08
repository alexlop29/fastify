"use strict";

const path = require("node:path");
const AutoLoad = require("@fastify/autoload");
import cors = require("@fastify/cors");

// Pass --options via CLI arguments in command to enable these options.
const options = {};

//@ts-ignore
module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });

    // Register CORS to allow cross-origin requests
    fastify.register(cors, {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    });
};

module.exports.options = options;
