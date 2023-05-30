
require("dotenv").config({
    path: "../.env",
})
module.exports = {
    development: {
        client: "pg",
        connection: {
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
        },
        migrations: {
            directory: "./migrations",
        },
        seeds: { directory: "./seeds" },
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: "./migrations",
        },
        seeds: { directory: "./seeds" },
    }
};