const knex = require('../db/knex')


function getAllProviders() {
  return knex('providers')
    .then(result => result)
}

function getOneProvider(providerId) {
  return knex('providers')
    .where({
      'providers.id': providerId
    })
    .then(result => result)
}

function deleteProvider(providerId) {
  return knex('providers')
    .where({
      'providers.id': providerId
    })
    .del()
    .returning('*')
    .then(result => result)
}

function addProvider(body) {
  console.log(body)
  return knex('providers')
    // .where({
    //   'providers.id': providerId
    // })
    .insert({
      companyname: body.companyname,
      providerbio: body.providerbio,
      address: body.address,
      phone: body.phone,
      businessphoto: body.businessphoto,
      typeID: body.typeID
    })
    .returning('*')
}

module.exports = {
  getAllProviders,
  getOneProvider,
  deleteProvider,
  addProvider
}