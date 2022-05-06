const log = require("pino")({ prettyPrint: true })
const fastify = require("fastify")({ logger: log })
const productsRoutes = require("./app/routes/products.routes")
const imagesRoutes = require("./app/routes/images.routes")
const { port, host } = require("./app/config/env")
const { join } = require("path")

fastify.register(require("fastify-cors"), { origin: "*" })
fastify.register(require("fastify-file-upload"), { createParentPath: true })
fastify.register(require("fastify-static"), { root: join(__dirname, "../app/build")})

fastify.get('*', (req, reply) => reply.sendFile("index.html"))

productsRoutes.forEach(route => fastify.route(route))
imagesRoutes.forEach(route => fastify.route(route))

const start = async () => {
  try {
    await fastify.listen({ host, port })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
