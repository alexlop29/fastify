import { FastifyPluginAsync } from "fastify";

// services
import { UsersServiceV2 } from "../../../services";

const routes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.route({
    method: "GET",
    url: "/users",
    config: { tag: "v2" },
    handler: async (request, reply) => {
      const usersService = new UsersServiceV2();
      const users = usersService.getAll();
      return users;
    },
  });
};

export default routes;
