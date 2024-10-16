"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../../services");
const routes = async (fastify, opts) => {
    fastify.route({
        method: "GET",
        url: "/",
        config: { tag: "v2" },
        handler: async (request, reply) => {
            const usersService = new services_1.UsersServiceV2();
            const users = usersService.getAll();
            return users;
        },
    });
};
exports.default = routes;
//# sourceMappingURL=index.js.map