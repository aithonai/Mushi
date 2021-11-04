const { host, port } = require("../config/env")

function imageUrl(res ,product, index) {
  productImage = JSON.parse(product.image)
  if (productImage.length === 0) return
  let urlImages = []
  productImage.map(image => {
    urlImages = [...urlImages, `http://${host}:${port}/image/${image}`]
  })
  return (res[index].image = urlImages)
}

module.exports.default = imageUrl