const express = require('express');
const {userAuth} = require('../middlewares/userAuth');

const {getImages, publishImages} = require('../controllers/imageController')

const router = express.Router();

router.get('/', getImages);

router.post('/upload', userAuth , publishImages);

module.exports = router;