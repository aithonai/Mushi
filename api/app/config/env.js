const dotenv = require("dotenv").config()

module.exports = {
  port: process.env.PORT || 5000,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}
