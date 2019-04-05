const model = require('../models/favorites')

function addAFavorite (req, res, next) {
  let {
    user_id,
    provider_id
  } = req.body

  model.addAFavorite(req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 500,
          message: 'error'
        })
      }
      res.status(201).send({
        user_id,
        provider_id
      })
    })
    .catch(next)
}

function getOneUserFavorites (req, res, next) {
  model.getOneUserFavorites(req.params.userId)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function deleteFavorite (req, res, next) {
  return model.deleteFavorite(req.params.favoriteId)
    .then((result) =>
      res.status(200).send(result)
    )
    .catch(err => next(err))
}

module.exports = {
  addAFavorite,
  getOneUserFavorites,
  deleteFavorite
}
