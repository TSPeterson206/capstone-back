const model = require('../models/providers')

function getAllProviders (req, res, next) {
  model.getAllProviders()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function getOneProvider (req, res, next) {
  model.getOneProvider(req.params.providerId)
    .then((result) => {
      if (!result || result.length === 0) {
        return next({
          status: 404,
          message: 'provider not found!'
        })
      }
      res.status(200).send(result)
    })
    .catch(next)
};

function deleteProvider (req, res, next) {
  return model.deleteProvider(req.params.providerId)
    .then((result) =>
      res.status(200).send(result)
    )
    .catch(err => next(err))
}

function addProvider (req, res, next) {
  let {
    companyname,
    providerbio,
    address,
    phone,
    businessphoto,
    typeID
  } = req.body

  return model.addProvider(req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'error'
        })
      }
      res.status(201).send({
        companyname,
        providerbio,
        address,
        phone,
        businessphoto,
        typeID
      })
    })
    .catch(next)
}

module.exports = {
  getAllProviders,
  getOneProvider,
  deleteProvider,
  addProvider
}
