const express = require('express')
const router = express.Router({
  mergeParams: true
})
const usersCtrl = require('../controllers/users')
const authCtrl = require('../controllers/auth')

router.get('/', usersCtrl.getAllUsers)
router.get('/:userId', usersCtrl.getOneUser)
router.put('/:userId', usersCtrl.editOneUser)
router.post('/', usersCtrl.signup, authCtrl.login)
router.post('/:userId/avatar', usersCtrl.uploadImage)

module.exports = router
