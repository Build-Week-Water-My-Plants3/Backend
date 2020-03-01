require('dotenv').config();
const knex = require("knex");
const config = require("../knexfile");
const env = process.env.DB_ENV
module.exports = knex(config[env]);