require('dotenv').config();
const AgreementsController = require('../models/Agreements');

exports.agreements_add = (req, res) => {

const agreements = new AgreementsController({
    content: req.body.content,
    contacts: req.body.contacts
});

agreements.save().then(data => {
    agreements.get(data, (agreements) => {
        res.send(agreements);
    });
}).catch(err => {
    if(err.code === 11000) {
        res.status(400).send({message: "is already exist"});
        
    } res.status(500).send({message: err});
 });
};


exports.get_agreements = (req, res) => {
    AgreementsController.find().exec(function(err, agreements){
        if (agreements.length) {
            agreements = agreements.map((agreement) => {
                return {
                    content:          agreement.content || '',
                    contacts:          agreement.contacts || '' 
                }
            });
            res.send({
                agreements 
            })
        } else {
            res.status(400).send({
                message: "not found"
            });
        }
    });
};
