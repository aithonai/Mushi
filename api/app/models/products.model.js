const sql = require("./db")
const path = require("path")
const { host, port } = require("../config/env")

const Product = function (product) {
  const fileImages = []
  for (const key in product) {
    if (product[key].mv) {
      const file = product[key]
      const filename = `${file.md5}.${file.name.split(".")[1]}`
      const filepath = path.join(__dirname, "../../public", filename)

      file.mv(filepath)
      fileImages.push(filename)
    } else this[key] = product[key]
  }
  this.image = JSON.stringify(fileImages)
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
      if (productImage.length === 0) return
      let urlImages = []
      productImage.map(image => {
        urlImages = [...urlImages, `http://${host}:${port}/image/${image}`]
      })
      res[index].image = urlImages
    })

    console.log("response", res)
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
