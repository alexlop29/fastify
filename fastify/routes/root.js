"use strict";

fastify.register(require("./routes/v1/users"), { prefix: "/v1" });
fastify.register(require("./routes/v2/users"), { prefix: "/v2" });

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return { root: true };
  });
};
