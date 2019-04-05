const express = require('express')
const router = express.Router({
  mergeParams: true
})
const providersCtrl = require('../controllers/providers')

router.get('/', providersCtrl.getAllProviders)
router.get('/:providerId', providersCtrl.getOneProvider)
router.delete('/:providerId', providersCtrl.deleteProvider)
router.post('/', providersCtrl.addProvider)

module.exports = router
