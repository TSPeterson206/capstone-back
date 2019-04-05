const model = require('../models/reviews')

function addReview (req, res, next) {
  let {
    content,
    rating,
    user_id,
    provider_id
  } = req.body
  model.addReview(req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 500,
          message: 'error'
        })
      }
      res.status(201).send({
        content,
        rating,
        user_id,
        provider_id
      })
    })
    .catch(next)
}

function getOneReview (req, res, next) {
  model.getOneReview(req.params.reviewId)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function getAllReviews (req, res, next) {
  model.getAllReviews()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function getOneProviderReviews (req, res, next) {
  model.getOneProviderReviews(req.params.providerId)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
};

function getOneUserReviews (req, res, next) {
  model.getOneUserReviews(req.params.userId)
    .then((result) => {
      if (!result || result.length === 0) {
        return next({
          status: 404,
          message: 'user not found!'
        })
      }
      res.status(200).send(result)
    })
    .catch(next)
};

function deleteReview (req, res, next) {
  return model.deleteReview(req.params.reviewId)
    .then((result) =>
      res.status(200).send(result)
    )
    .catch(err => next(err))
}

function updateReview (req, res, next) {
  let {
    content,
    rating
  } = req.body

  return model.updateReview(req.params.reviewId, req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'error'
        })
      }
      res.status(201).send({
        content,
        rating
      })
    })
    .catch(next)
}

module.exports = {
  addReview,
  getOneReview,
  getAllReviews,
  getOneProviderReviews,
  getOneUserReviews,
  deleteReview,
  updateReview
}
