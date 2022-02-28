const express = require('express')
const router = express.Router()
const passport = require('../../config/passport') // 引入 Passport，需要他幫忙做驗證
const userController = require('../../controllers/apis/user-controller')
const admin = require('./modules/admin')
const { apiErrorHandler } = require('../../middleware/error-handler')
const restController = require('../../controllers/apis/restaurant-controller')

router.use('/admin', admin)
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn) // 注意是 Post
router.get('/restaurants', restController.getRestaurants)
router.use('/', apiErrorHandler)

module.exports = router
