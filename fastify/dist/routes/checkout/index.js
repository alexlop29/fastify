"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../services");
const routes = async (fastify, opts) => {
    fastify.get("/", async (request, reply) => {
        return reply.send("hi");
    });
    fastify.route({
        method: "POST",
        url: "/create-session",
        schema: {
            body: {
                type: "object",
                required: ["lookup_key"],
                properties: {
                    lookup_key: { type: "string" },
                },
            },
        },
        handler: async (request, reply) => {
            const { lookup_key } = request.body;
            const CheckoutService = new services_1.Checkout();
            const session = await CheckoutService.create_checkout_session(lookup_key);
            return reply.code(200).send({ url: session.url });
        },
    });
    fastify.route({
        method: "POST",
        url: "/create-portal-session",
        schema: {
            body: {
                type: "object",
                required: ["session_id"],
                properties: {
                    session_id: { type: "string" },
                },
            },
        },
        handler: async (request, reply) => {
            const { session_id } = request.body;
            const CheckoutService = new services_1.Checkout();
            const session = await CheckoutService.create_portal_session(session_id);
            return reply.code(200).send({ url: session.url });
        },
    });
    fastify.route({
        method: "POST",
        url: "/webhook",
        handler: async (request, reply) => {
            const CheckoutService = new services_1.Checkout();
            const event = await CheckoutService.create_webhook(request.body, request.body, request.headers["stripe-signature"]);
            if (event == "succes") {
                return reply.code(200).send();
            }
            else {
                return reply.code(400).send();
            }
        },
    });
};
exports.default = routes;
//# sourceMappingURL=index.js.map