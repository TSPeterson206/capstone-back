exports.seed = function (knex, Promise) {
  return knex('type').insert([
    { id: 1, description: 'sud' },
    { id: 2, description: 'medical' },
    { id: 3, description: 'legal' },
    { id: 4, description: 'mh' },
    { id: 5, description: 'financial' },
    { id: 6, description: 'fitness' }
  ])
    .then(() => {
      return knex.raw("SELECT setval('type_id_seq', (SELECT MAX(id) FROM type));")
    })
}
