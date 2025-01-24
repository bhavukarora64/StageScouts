const express = require('express');
const {getAllStadium, getStadium} = require('../controllers/stadiumController')
const {userAuth} = require('../middlewares/userAuth');

const router = express.Router();

router.get('/all', getAllStadium)
router.get('/:stadiumId', getStadium)

module.exports = router;