const express = require('express')
const router = express.Router({
  mergeParams: true
})
const providersCtrl = require('../controllers/providers')

router.get('/', providersCtrl.getAllProviders)
router.get('/:providerId', providersCtrl.getOneProvider)
router.delete('/:providerId', providersCtrl.deleteProvider)
router.put('/:providerId', providersCtrl.updateProvider)

module.exports = router