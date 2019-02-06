const knex = require('../db/knex')

function addAFavorite(body) {
  console.log(body)
  return knex('favorites')
    .insert({
      'user_id': body.user_id,
      'provider_id': body.provider_id
    })
    .returning('*')
    .then(result => result)
}

function getOneUserFavorites(userId) {
  return knex('favorites')
    .where({
      'favorites.user_id': userId
    })
    .returning('*')
    .then(result => result)
}

module.exports = {
  addAFavorite,
  getOneUserFavorites
}