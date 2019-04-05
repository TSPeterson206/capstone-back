exports.seed = function (knex, Promise) {
  return knex('favorites').insert([
    { id: 1, user_id: 1, provider_id: 1 },
    { id: 2, user_id: 2, provider_id: 2 },
    { id: 3, user_id: 3, provider_id: 3 },
    { id: 4, user_id: 4, provider_id: 4 },
    { id: 5, user_id: 5, provider_id: 5 },
    { id: 6, user_id: 6, provider_id: 6 },
    { id: 7, user_id: 7, provider_id: 7 },
    { id: 8, user_id: 8, provider_id: 8 },
    { id: 9, user_id: 9, provider_id: 9 },
    { id: 10, user_id: 10, provider_id: 10 },
    { id: 11, user_id: 1, provider_id: 11 },
    { id: 12, user_id: 2, provider_id: 12 },
    { id: 13, user_id: 3, provider_id: 13 },
    { id: 14, user_id: 4, provider_id: 14 },
    { id: 15, user_id: 5, provider_id: 15 },
    { id: 16, user_id: 6, provider_id: 16 },
    { id: 17, user_id: 7, provider_id: 17 },
    { id: 18, user_id: 8, provider_id: 18 },
    { id: 19, user_id: 9, provider_id: 19 },
    { id: 20, user_id: 10, provider_id: 20 },
    { id: 21, user_id: 1, provider_id: 19 },
    { id: 22, user_id: 2, provider_id: 18 },
    { id: 23, user_id: 3, provider_id: 17 },
    { id: 24, user_id: 4, provider_id: 16 },
    { id: 25, user_id: 5, provider_id: 15 },
    { id: 26, user_id: 6, provider_id: 14 },
    { id: 27, user_id: 7, provider_id: 13 },
    { id: 28, user_id: 8, provider_id: 12 },
    { id: 29, user_id: 9, provider_id: 11 },
    { id: 30, user_id: 10, provider_id: 10 },
    { id: 31, user_id: 1, provider_id: 9 }

  ])
    .then(() => {
      return knex.raw("SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites));")
    })
}
