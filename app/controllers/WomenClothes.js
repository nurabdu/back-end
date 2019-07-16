require('dotenv').config();
const WomenClothes = require('../models/WomenClothes');

exports.registerClothes = (req, res) => {

const womenClothes = new WomenClothes({
    category: req.body.category,
    product: req.body.product, 
    size: req.body.size,
    color: req.body.color,
    price: req.body.price, 
    quantity: req.body.quantity
});

womenClothes.save().then(data => {
    womenClothes.get(data, (womenClothes) => {
        res.send(womenClothes);
    });
}).catch(err => {
    if(err.code === 11000) {
        res.status(400).send({message: "is already exist"});
        
    } res.status(500).send({message: err});
 });
};

exports.registerDescription = (req, res) => {

    const products = new WomenClothes({
        category: req.body.category,
        product: req.body.product, 
        price: req.body.price, 
        description: req.body.description,
        quantity: req.body.quantity
    });
    
products.save().then(data => {
    products.get(data, (products) => {
        res.send(products);
    });
}).catch(err => {
    if(err.code === 11000) {
        res.status(400).send({message: "is already exist"});
        
    } res.status(500).send({message: err});
 });
};

exports.get_womenClothes = (req, res) => {
    WomenClothes.find().exec(function(err, womenClothes){
        if (womenClothes.length) {
            womenClothes = womenClothes.map((womenClothes) => {
                return {
                    category:          clothes.category || '',
                    product:          clothes.product || '',  
                    size:              clothes.size || '',
                    color:             clothes.color    || '',     
                    price:         clothes.price || '',
                    quantity:         clothes.quantity || ''
                }
            });
            res.send({
                womenClothes 
            })
        } else {
            res.status(400).send({
                message: "not found"
            });
        }
    });
};

exports.get_description = (req, res) => {
    WomenClothes.find().exec(function(err, products){
        if (products.length) {
            products = products.map((product) => {
                return {
                    category:         product.category || '',
                    product:          product.product || '',    
                    price:            product.price || '',
                    description:      product.description || '',
                    quantity:         product.quantity || ''

                }
            });
            res.send({
                products 
            })
        } else {
            res.status(400).send({
                message: "not found"
            });
        }
    });
};


