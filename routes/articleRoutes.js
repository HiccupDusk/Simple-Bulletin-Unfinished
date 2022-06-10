const express = require('express');
const router = express.Router();

const articleControllers = require('../controllers/articleControllers');

//Creating a products (ADMIN)
router.post('/createArticle', (req, res) => {
  articleControllers.addArticle(req).then((result) => res.send(result));
});

// DELETE A PRODUCT (ADMIN ONLY)
router.delete('/deleteArticle/:productIds', (req, res) => {
  articleControllers
    .deleteArticle(req.params.productIds)
    .then((result) => res.send(result));
});

//Retrieving ALL products
router.get('/all', (req, res) => {
  articleControllers.getAllArticle().then((result) => res.send(result));
});

module.exports = router;
