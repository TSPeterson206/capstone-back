const knex = require('../db/knex')

function addAFavorite (body) {
  return knex('favorites')
    .insert({
      'user_id': body.user_id,
      'provider_id': body.provider_id
    })
    .returning('*')
    .then(result => result)
}

function getOneUserFavorites (userId) {
  return knex('favorites')
    .select('providers.*', 'favorites.*')
    .where({
      'user_id': userId
    })
    .innerJoin('providers', 'favorites.provider_id', 'providers.id')
}

function deleteFavorite (favoriteId) {
  return knex('favorites')
    .where({
      'id': favoriteId
    })
    .del()
    .returning('*')
}

module.exports = {
  addAFavorite,
  getOneUserFavorites,
  deleteFavorite
}
