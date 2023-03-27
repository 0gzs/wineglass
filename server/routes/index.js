const express = require('express')
const controllers = require('../controllers')
const router = express.Router()

router.route('/').get(controllers.getWine).post(controllers.addOneWine)
router.route('/search-by').post(controllers.getWineBy)
router.route('/main-search').post(controllers.findWine)
router.route('/types').get(controllers.getTypes)
router.route('/update-barcode/:id').get(controllers.saveBarcodeImg)

module.exports = router
