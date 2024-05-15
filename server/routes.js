const productController = require("./db/Products/controller");

module.exports = function routes(app) {
    app.get("/products", async (req, res) => {
        const products = await productController.getProducts();
        res.send(products);
    });

    app.get("/products/:code", async (req, res) => {
        const product = await productController.getProduct(req.params.code);
        res.send(product);
    });

    app.post("/products/create", async (req, res) => {
        const product = await productController.createProduct(req.body);
        res.send(product);
    });
};
