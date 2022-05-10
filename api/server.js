const log = require("./app/server/logger")
const fastify = require("fastify")({ log })
const routes = require("./app/routes")
const { port, host } = require("./app/config/env")
const { join } = require("path")

fastify.register(require("fastify-cors"), { origin: "*" })
fastify.register(require("fastify-file-upload"), { createParentPath: true })
fastify.register(require("fastify-static"), { root: join(__dirname, "../app/build")})

fastify.get('*', (req, reply) => reply.sendFile("index.html"))

routes.products.forEach(route => fastify.route(route))
routes.images.forEach(route => fastify.route(route))

fastify.listen({ host, port })
.then(adress => log.info(adress))
.catch(err => {
  log.error(err)
  process.exit(1)
})