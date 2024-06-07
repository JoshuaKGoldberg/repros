import Fastify from "fastify";

const fastify = Fastify();

fastify.get("/", (_, reply) => {
  // https://github.com/fastify/fastify/issues/4246
  // Return type: FastifyReply
  reply.header("x-foo", "bar");

  // https://github.com/fastify/fastify/issues/4399
  // Return type: FastifyReply
  reply.send("OK");
});

// Should be allowed from the FastifyReply entry, but:
// https://github.com/typescript-eslint/typescript-eslint/issues/9303
fastify.register(() => {});
