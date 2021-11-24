const sharp = require("sharp")
const fs = require("fs")
const path = require("path")

const imagesFolder = path.resolve(__dirname, "../../public")

function minifyImage(image) {
  try {
    !fs.existsSync(imagesFolder) ? fs.mkdirSync(imagesFolder) : null
    imgCompress(image, image.format)
    imgThumbnail(image, image.format)
  } catch (err) {
    throw err
  }
}

function imgCompress(image, format = ".jpg") {
  if (format === ".jpeg" || format === ".jpg") {
    sharp(image.data)
      .toFormat("jpeg", { quality: 90 })
      .resize({ width: 1440 })
      .toFile(path.resolve(imagesFolder, image.name))
  }
  if (format === ".png") {
    sharp(image.data)
      .toFormat("png", { quality: 1, compressionLevel: 9 })
      .resize({ width: 720 })
      .toFile(path.resolve(imagesFolder, image.name))
  }
}

function imgThumbnail(image, format = ".jpg") {
  if (format === ".jpeg" || format === ".jpg") {
    sharp(image.data)
      .toFormat("jpg", { mozjpeg: true, quality: 90 })
      .resize({ width: 200 })
      .toFile(
        path.resolve(imagesFolder, image.id + ".thumbnail" + image.format)
      )
  }
  if (format === ".png") {
    sharp(image.data)
      .toFormat("png", { quality: 1, compressionLevel: 9 })
      .resize({ width: 200 })
      .toFile(
        path.resolve(imagesFolder, image.id + ".thumbnail" + image.format)
      )
  }
}

module.exports = { minifyImage, imagesFolder }
