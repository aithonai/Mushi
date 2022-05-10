const logConfig = require("../config/logger")
const logger = require("pino")(logConfig)

module.exports = logger