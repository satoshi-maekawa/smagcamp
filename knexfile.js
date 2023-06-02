
require("dotenv").config({
    path: ".env",
})
module.exports = {
    development: {
        client: "pg",
        connection: {
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
        },
        migrations: {
            directory: "./db/migrations",
        },
        seeds: { directory: "./db/seeds" },
    },
    production: {
        client: "pg",
        connection: {
            connectionString:"postgres://maekawa:f5zrFFA5yQBNuLM5jltJ7qL5aI9Ikv4C@dpg-chspod64dad9muc5eus0-a/smugcamp_udte"
        },
        migrations: {
            directory: "./db/migrations",
        },
        seeds: { directory: "./db/seeds" },
    }
};