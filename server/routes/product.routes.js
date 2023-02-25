const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api/product', ProductController.getAllProducts);
    app.get("/api/product/:id", ProductController.findOneSingleProduct);
    app.post('/api/product/new', ProductController.createProduct);
    app.put("/api/product/update/:id", ProductController.updateExistingProduct);
    app.delete("/api/product/delete/:id", ProductController.deleteAnExistingProduct);
}