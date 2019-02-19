const express = require('express')
const router = express.Router({
  mergeParams: true
})
const favoritesCtrl = require('../controllers/favorites')

router.post('/', favoritesCtrl.addAFavorite)
router.get('/', favoritesCtrl.getFavorites)

module.exports = router