const mongoose = require('mongoose');

const Agreements = mongoose.Schema ({
    content: String,
    contacts: String
},
{
    timestamps: true
});


module.exports = mongoose.model('Agreements', Agreements);