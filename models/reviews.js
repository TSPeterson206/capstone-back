const knex = require('../db/knex')

function addReview (body) {
  return knex('reviews')
    .insert({
      'user_id': body.user_id,
      'content': body.content,
      'provider_id': body.provider_id,
      'rating': body.rating
    })
    .returning('*')
    .then(result => result)
}

function getOneReview (reviewId) {
  return knex('reviews')
    .where({
      'reviews.id': reviewId
    })
    .then(result => result)
}

function getAllReviews () {
  return knex('reviews')
    .then(result => result)
}

function getOneProviderReviews (providerId) {
  return knex('reviews')
    .where({
      'reviews.provider_id': providerId
    })
    .then(result => result)
}

function getOneUserReviews (userId) {
  return knex('reviews')
    .where({
      'reviews.user_id': userId
    })
    .returning('*')
    .then(result => result)
}

function deleteReview (reviewId) {
  return knex('reviews')
    .where({
      'reviews.id': reviewId
    })
    .del()
    .returning('*')
    .then(result => result)
}

function updateReview (reviewId, body) {
  return knex('reviews')
    .where({
      'reviews.id': reviewId
    })
    .update({
      content: body.content,
      rating: body.rating
    })
    .returning('*')
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
