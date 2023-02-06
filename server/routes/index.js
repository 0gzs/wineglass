const express = require('express')
const controllers = require('../controllers')
const router = express.Router()

router.route('/').get(controllers.getWine).post(controllers.addOneWine)
router.route('/desc').post(controllers.getWineByDesc)
router.route('/name').post(controllers.getWineByName)

module.exports = router
