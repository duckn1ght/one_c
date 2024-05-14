const { Sequelize } = require('sequelize')

const sqlize = new Sequelize('one_c', 'root', '', {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    logging: false
})

sqlize.authenticate().then(() => {
    console.log('> Подключение к БД успешно!')
}).catch(err => {
    console.log(`> Ошибка подключения к БД: ${err}`)
})

const products = require('./Products/model')(sqlize)

sqlize.sync().then(() => {
    console.log('> База Данных успешно синхронизирована!')
}).catch(err => {
    console.log(`> Ошибка синхронизации базы данных: ${err}`);
})

module.exports = {
    sqlize: sqlize,
    products: products
}
