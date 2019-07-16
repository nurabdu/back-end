const mongoose = require('mongoose');

const WomenClothes = mongoose.Schema ({
    category: String,
    product: String,
    size: String,
    color: String,
    price: String,
    description: String,
    quantity: String
},
{
    timestamps: true
});


module.exports = mongoose.model('WomenClothes', WomenClothes);