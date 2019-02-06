exports.seed = function(knex, Promise) {
  return knex('favorites').insert([
    {id: 1, user_id:1, provider_id:1},
    {id: 2, user_id:2, provider_id:2},
    {id: 3, user_id:3, provider_id:3},
    {id: 1, user_id:4, provider_id:4},
    {id: 1, user_id:5, provider_id:5},
    {id: 1, user_id:6, provider_id:6},
    {id: 1, user_id:7, provider_id:7},
    {id: 1, user_id:8, provider_id:8},
    {id: 1, user_id:9, provider_id:9},
    {id: 1, user_id:10, provider_id:10},
    {id: 1, user_id:1, provider_id:11},
    {id: 1, user_id:2, provider_id:12},
    {id: 1, user_id:3, provider_id:13},
    {id: 1, user_id:4, provider_id:14},
    {id: 1, user_id:5, provider_id:15},
    {id: 1, user_id:6, provider_id:16},
    {id: 1, user_id:7, provider_id:17},
    {id: 1, user_id:8, provider_id:18},
    {id: 1, user_id:9, provider_id:19},
    {id: 1, user_id:10, provider_id:20},
    {id: 1, user_id:1, provider_id:1},
    {id: 1, user_id:2, provider_id:2},
    {id: 1, user_id:3, provider_id:3},
    {id: 1, user_id:4, provider_id:4},
    {id: 1, user_id:5, provider_id:5},
    {id: 1, user_id:6, provider_id:6},
    {id: 1, user_id:7, provider_id:7},
    {id: 1, user_id:8, provider_id:8},
    {id: 1, user_id:9, provider_id:9},
    {id: 1, user_id:10, provider_id:10},
    {id: 1, user_id:1, provider_id:11}

    ])
  .then(() => {
    return knex.raw("SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites));")
})
}