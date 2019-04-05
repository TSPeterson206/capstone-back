exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(() => {
      return knex('providers').del()
    })
    .then(() => {
      return knex('reviews').del()
    })
    .then(() => {
      return knex('favorites').del()
    })
    .then(() => {
      return knex('type').del()
    })
    .then(() => {
      return knex('goals').del()
    })
}
