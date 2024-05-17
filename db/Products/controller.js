const sqlize = require("../index");

async function getProducts() {
    try {
        const products = await sqlize.products.findAll();
        if (!products) {
            console.error("> Продукты не найдены");
            return [];
        }
        return products;
    } catch (error) {
        console.error(`> Ошибка получения всех товаров: ${error}`);
        return [];
    }
}

async function getProduct(code) {
    try {
        const product = await sqlize.products.findOne({
            where: { code: code },
        });
        if (!product) {
            console.error("> Продукты не найдены");
            return false;
        }
        return product;
    } catch (error) {
        console.error(`> Ошибка получения товара: ${error}`);
    }
}

async function createProduct(product) {
    try {
        if (await getProduct(product.code)) {
            console.error("> Товар уже создан");
            return false;
        }
        const newProduct = await sqlize.products.create(product);
        return newProduct;
    } catch (error) {
        console.error(`> Ошибка создания товара: ${error}`);
        return false;
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
};
