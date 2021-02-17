var express = require('express')
var router = express.Router()

const OffersControler = require('../controllers/ProductControler')


router.get('/Products', OffersControler.listOffers)
router.post('/Create-Product', OffersControler.newOferr)

module.exports = router