const express = require('express')
const router = express.Router()
const passport = require('../../config/passport') // 引入 Passport，需要他幫忙做驗證
const userController = require('../../controllers/apis/user-controller')
const admin = require('./modules/admin')
const { authenticated, authenticatedAdmin } = require('../../middleware/api-auth')
const { apiErrorHandler } = require('../../middleware/error-handler')
const restController = require('../../controllers/apis/restaurant-controller')

router.use('/admin', authenticated, authenticatedAdmin, admin)
router.get('/restaurants', authenticated, restController.getRestaurants)
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn) // 注意是 Post
router.use('/', apiErrorHandler)

module.exports = router
