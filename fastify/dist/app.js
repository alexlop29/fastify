"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("node:path");
const AutoLoad = require("@fastify/autoload");
const cors = require("@fastify/cors");
const options = {};
module.exports = async function (fastify, opts) {
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, "plugins"),
        options: Object.assign({}, opts),
    });
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, "routes"),
        options: Object.assign({}, opts),
    });
    fastify.register(cors, {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    });
};
module.exports.options = options;
//# sourceMappingURL=app.js.map