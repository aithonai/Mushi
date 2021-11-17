const { resolve } = require("path")
const fs = require("fs")

exports.getOne = (req, reply) => {
  const imagePath = resolve(__dirname, "../../public/", req.params.id)
  const stream = fs.createReadStream(imagePath)
  reply.type("image/jpg").send(stream)
}
