const Product = require("../models/products.model")

exports.create = (req, reply) => {
  if (!req.body) {
    res.code(400).send({
      message: "Content can not be empty!",
    })
  }

  Product.create(new Product(req.body), (err, data) => {
    if (err) {
      reply.code(500).send({
        message: err.message || `Error creating product.`,
      })
    } else reply.code(201).send(data)
  })
}

exports.getAll = (req, reply) => {
  Product.getAll((err, data) => {
    if (err)
      reply.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      })
    else reply.send(data)
  })
}

exports.getOne = (req, reply) => {
  Product.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        reply.status(404).send({
          message: `Not found Product with id ${req.params.id}.`,
        })
      } else {
        reply.status(500).send({
          message:
            err.message || "Some error occurred while retrieving product.",
        })
      }
    } else reply.send(data)
  })
}

exports.getCategory = (req, reply) => {
  Product.getByCategory(req.params.category, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        reply.status(404).send({
          message: `Not found Products with category ${req.params.category}.`,
        })
      } else {
        reply.status(500).send({
          message:
            err.message ||
            "Some error occurred while retrieving product category.",
        })
      }
    } else reply.send(data)
  })
}

exports.update = (req, reply) => {
  if (!req.body) {
    res.code(400).send({
      message: "Content can not be empty!",
    })
  }

  Product.updateById(req.params.id, new Product(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        reply.code(404).send({
          message: `Not found product with id ${req.params.id}.`,
        })
      } else {
        reply.code(500).send({
          message:
            err.message || `Error updating product with id ${req.params.id}.`,
        })
      }
    } else reply.send(data)
  })
}

exports.delete = (req, reply) => {
  Product.deleteById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        reply.code(404).send({
          message: `Not found product with id ${req.params.id}.`,
        })
      } else {
        reply.code(500).send({
          message:
            err.message ||
            `Could not delete product with id ${req.params.customerId}`,
        })
      }
    } else
      reply.code(200).send({ message: `Product was deleted successfully.` })
  })
}
