const mysql = require("mysql2")
const env = require("../config/env")

const connection = mysql.createConnection({
  host: env.host,
  user: env.user,
  password: env.password,
  database: env.database,
})

connection.connect(function (err) {
  if (err) throw err
})

module.exports = connection
