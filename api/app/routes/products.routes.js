const Products = require("../handlers/products.handler.js");

module.exports = [
  {
    // Create new Product
    url: "/products",
    method: "POST",
    handler: Products.create,
  },
  {
    // Get all Products
    url: "/products",
    method: "GET",
    handler: Products.getAll,
  },
  {
    //Get a single Product with product id
    url: "/products/:id",
    method: "GET",
    handler: Products.getOne,
  },
  {
    // Get all Products
    url: "/products/category/:category",
    method: "GET",
    handler: Products.getCategory,
  },
  {
    url: "/products/:id",
    method: "PUT",
    handler: Products.update,
  },
  {
    url: "/products/:id",
    method: "DELETE",
    handler: Products.delete,
  },
]
