const fastify = require("fastify")({ logger: true })
const productsRoutes = require("./app/routes/products.routes")
const imagesRoutes = require("./app/routes/images.routes")
const { port, host } = require("./app/config/env")

fastify.register(require("fastify-cors"), { origin: "*" })
fastify.register(require("fastify-file-upload"), {
  createParentPath: true,
})

productsRoutes.forEach(route => fastify.route(route))
imagesRoutes.forEach(route => fastify.route(route))

const start = async () => {
  try {
    await fastify.listen({ port, host })
    console.log(`Server listening on http://${host}:${port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
