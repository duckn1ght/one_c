const { Sequelize } = require("sequelize");
require("dotenv").config();

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const sqlize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    dialect: "mysql",
    host: DB_HOST,
    port: DB_PORT,
    logging: false,
});

sqlize
    .authenticate()
    .then(() => {
        console.log("> Подключение к БД успешно!");
    })
    .catch((err) => {
        console.log(`> Ошибка подключения к БД: ${err}`);
    });

const products = require("./Products/model")(sqlize);

sqlize
    .sync()
    .then(() => {
        console.log("> База Данных успешно синхронизирована!");
    })
    .catch((err) => {
        console.log(`> Ошибка синхронизации базы данных: ${err}`);
    });

module.exports = {
    sqlize: sqlize,
    products: products,
};
