module.exports = (app) => {
    let agreements = require('../controllers/AgreementsController');
    let auth = require('../middleware/auth');

   /**
     * Clothes post
     */
    app.post('/agreements/agreements_add', agreements.agreements_add);

     /**
     *Get Clothig
     */
    app.get('/agreements/get:id?', agreements.get_agreements);

};
    