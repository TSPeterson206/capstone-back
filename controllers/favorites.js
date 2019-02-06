const model = require('../models/favorites');


function addAFavorite(req, res, next) {
  let {
    user_id,
    provider_id
  } = req.body

  model.addAFavorite(req.body)
    .then((result) => {
      if (!result)
        return next({
          status: 500,
          message: "error"
        })
      res.status(201).send({
        user_id,
        provider_id
      })
    })
    .catch(next)
}

function getOneUserFavorites(req, res, next) {
  model.getOneUserFavorites(req.params.id)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

module.exports = {
  addAFavorite,
  getOneUserFavorites
}