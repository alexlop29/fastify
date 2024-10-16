import { FastifyPluginAsync } from "fastify";

// services
import { UsersService } from "../../../services";

const routes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.route({
    method: "GET",
    url: "/",
    config: { tag: "v1" },
    handler: async (request, reply) => {
      const usersService = new UsersService();
      const users = usersService.getAll();
      return users;
    },
  });
};

export default routes;
