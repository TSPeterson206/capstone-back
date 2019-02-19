const knex = require('../db/knex')

function addAFavorite(body) {
  return knex('favorites')
    .insert({
      'user_id': body.user_id,
      'provider_id': body.provider_id
    })
    .returning('*')
    .then(result => result)
}

function getFavorites() {
  return knex('favorites')
    .returning('*')
    .then(result => result)
}

function deleteFavorite(favoriteId) {
  return knex('favorites')
  .where({
    'id':favoriteId
  })
  .del()
  .returning('*')
}

module.exports = {
  addAFavorite,
  getFavorites,
  deleteFavorite
}