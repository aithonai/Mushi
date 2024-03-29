const Images = require("../handlers/images.handler.js")

module.exports = [
  {
    url: "/image/:id",
    method: "GET",
    handler: Images.getOne,
  },
  {
    url: "/thumb/:id",
    method: "GET",
    handler: Images.getThumb,
  },
]
