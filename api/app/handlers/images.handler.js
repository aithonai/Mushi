const { resolve } = require("path")
const fs = require("fs")
const { imagesFolder } = require("../utils/img_processing")

exports.getOne = (req, reply) => {
  const imagePath = resolve(imagesFolder, req.params.id)
  const stream = fs.createReadStream(imagePath)
  reply.type("image/jpg").send(stream)
}

exports.getThumb = (req, reply) => {
  const imagePath = resolve(imagesFolder, req.params.id)
  const stream = fs.createReadStream(imagePath)
  reply.type("image/jpg").send(stream)
}
