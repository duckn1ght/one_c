const productController = require("./db/Products/controller");

module.exports = function routes(app) {
    // Главная страница
    app.get("/", (req, res) => {
        res.render("index", {
            title: "Интеграция 1С",
            one_c_url: process.env.ONE_C_URL,
        });
    });

    // Вывод всех товаров
    app.get("/products/", async (req, res) => {
        const products = await productController.getProducts();
        res.send(products);
    });

    // Вывод определенного товара по артикулу
    app.get("/products/:code", async (req, res) => {
        const product = await productController.getProduct(req.params.code);
        res.send(product);
    });

    // Добавление товара
    app.post("/products/create", async (req, res) => {
        const product = await productController.createProduct(req.body);
        res.send(product);
    });
};
