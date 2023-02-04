const express = require('express')
const controllers = require('../controllers')
const router = express.Router()

router.route('/').get(controllers.getWine).post(controllers.addOneWine)
router.route('/like').get(controllers.complexQuery)

module.exports = router
