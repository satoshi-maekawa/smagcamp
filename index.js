const knex = require("knex");
const knexConfig = require("./knexfile");
const environment = process.env.DATABASE_URL ? "production" : "development";

knex(knexConfig[environment]);

module.exports = knex(knexConfig);
