const { Product } = require('../models/product.models');

// Export a function to get all products
module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({ message: "Something went wrong",
        error: err }));
};


// Export a function to create a product
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.status(400).json(err))
}

// Export a function to update a product
module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
    .then(updatedProduct => res.json({ product: updatedProduct }))
    .catch(err => res.status(400).json(err))
};


// DELETE
module.exports.deleteAnExistingProduct = (req, res) => {
    const {id} = req.params
    Product.deleteOne({_id: id})
        .then(confirmation => res.json(confirmation))
        .catch(err => res.status(400).json(err))
}

// Export a function to get a single product
module.exports.findOneSingleProduct = (req, res) => {
    const {id} = req.params
    Product.findOne({_id: id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
};