const express = require('express')
const router = express.Router({
  mergeParams: true
})
const favoritesCtrl = require('../controllers/favorites')

router.post('/', favoritesCtrl.addAFavorite)
router.get('/:userId', favoritesCtrl.getOneUserFavorites)
router.delete('/:userId/:favoriteId', favoritesCtrl.deleteFavorite)

module.exports = router
