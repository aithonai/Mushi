const log = require("../server/logger")
const sql = require("./db")
const path = require("path")
const { minifyImage, deleteImage } = require("../utils/img_processing")
const { host, port } = require("../config/env")

const Product = function (product) {
  const fileImages = []
  const fileThumbnails = []
  for (const key in product) {
    if (product[key].mv) {
      const file = product[key],
      image = {
        id: file.md5,
        name: file.md5 + path.extname(file.name),
        format: path.extname(file.name).toLowerCase(),
        data: file.data,
      }
      minifyImage(image)
      fileImages.push(image.name)
      fileThumbnails.push(image.id + ".thumbnail" + image.format)
    } else this[key] = product[key]
  }
  this.image = JSON.stringify(fileImages)
  this.thumbnail = JSON.stringify(fileThumbnails)
}

Product.create = (newProduct, result) => {
  sql.query("INSERT INTO products SET ?", newProduct, (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(err, null)
      return
    }

    console.log("created product: ", { id: res.insertId, ...newProduct })
    result(null, { id: res.insertId, ...newProduct })
  })
}

Product.getAll = result => {
  sql.query("SELECT * FROM products", (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(null, err)
      return
    }

    res.forEach((product, index) => {
      productImage = JSON.parse(product.image)
      productThumbnail = JSON.parse(product.thumbnail)
      if (productImage.length === 0) return
      let urlImages = []
      let urlThumbnails = []
      productImage.map(image => {
        urlImages = [...urlImages, `http://${host}:${port}/image/${image}`]
      })
      productThumbnail.map(thumb => {
        urlThumbnails.push(`http://${host}:${port}/thumb/${thumb}`)
      })
      res[index].image = urlImages
      res[index].thumbnail = urlThumbnails
      log.info(product)
    })
    result(null, res)
  })
}

Product.getById = (productId, result) => {
  sql.query(`SELECT * FROM products WHERE id = ${productId}`, (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(null, err)
      return
    }

    console.log("products: ", res)
    result(null, res)
  })
}

Product.getByCategory = (category, result) => {
  sql.query(
    "SELECT * FROM products WHERE category = ?",
    category,
    (err, res) => {
      if (err) {
        console.log("error: ", err)
        result({ kind: "not_found" }, null)
        return
      }

      console.log("products: ", res)
      result(null, res)
    }
  )
}

Product.updateById = (productId, newProduct, result) => {
  const { name, description, price, image, category, stock } = newProduct

  sql.query(
    "UPDATE products SET name=?, description=?, price=?, image=?, category=?, stock=? WHERE id = ?",
    [name, description, price, image, category, stock, productId],
    (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(null, err)
        return
      }

      if (res.affectedRows == 0) {
        // not found Product with the id
        result({ kind: "not_found" }, null)
        return
      }

      console.log("updated Product: ", { id: productId, ...newProduct })
      result(null, { id: productId, ...newProduct })
    }
  )
}

Product.deleteById = (productId, result) => {
  const getImages = "SELECT image, thumbnail from products WHERE id = ?"
  sql.query(getImages, productId, (err, res) => {
    res = res[0]
    for (const field in res) {
      const images = JSON.parse(res[field])
      deleteImage(images)
    }
  })
  sql.query("DELETE FROM products WHERE id = ?", productId, (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(null, err)
      return
    }

    if (res.affectedRows == 0) {
      // not found Product with the id
      result({ kind: "not_found" }, null)
      return
    }

    console.log(`Deleted Product with id: ${productId}`)
    result(null, res)
  })
}

module.exports = Product
