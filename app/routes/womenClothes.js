module.exports = (app) => {
    let womenClothes = require('../controllers/WomenClothes');
    let auth = require('../middleware/auth');

   /**
     * Clothes post
     */
    app.post('/womenClothes/registerClothes', womenClothes.registerClothes);

     /**
     *Get Clothig
     */
    app.get('/womenClothes/get:id?', womenClothes.get_womenClothes);
     /**
     * Descriptions post
     */
    app.post('/products/registerClothes', womenClothes.registerDescription);

     /**
     *Get Descriptions
     */
    app.get('/products/get:id?', womenClothes.get_description);

};