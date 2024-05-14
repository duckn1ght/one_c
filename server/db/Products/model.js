const Sequelize = require('sequelize');

module.exports = db => db.define('products', {
    prov_id: {
        type: Sequelize.INTEGER
    },
    cat_id: {
        type: Sequelize.INTEGER
    },
    sub_cat_id: {
        type: Sequelize.INTEGER
    },
    brand_id: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER 
    },
    description: {
        type: Sequelize.STRING
    },
    compound: {
        type: Sequelize.STRING
    },
    image_path: {
        type: Sequelize.STRING
    },
    exp_date: {
        type: Sequelize.STRING
    },
    country: {
        type: Sequelize.STRING
    },
    unit: {
        type: Sequelize.STRING
    },
    capacity: {
        type: Sequelize.STRING
    },
    sale: {
        type: Sequelize.INTEGER
    },
    promo: {
        type: Sequelize.STRING
    },
    total_price: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
})
