const express = require('express')
const router = express.Router({
  mergeParams: true
})
const reviewsCtrl = require('../controllers/reviews')

router.get('/', reviewsCtrl.getAllReviews)
router.get('/:reviewId', reviewsCtrl.getOneReview)
router.get('/providers/:providerId', reviewsCtrl.getOneProviderReviews)
router.get('/users/:userId', reviewsCtrl.getOneUserReviews)
router.post('/', reviewsCtrl.addReview)
router.put('/:reviewId', reviewsCtrl.updateReview)
router.delete('/:reviewId', reviewsCtrl.deleteReview)

module.exports = router
