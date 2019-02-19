exports.seed = function(knex, Promise) {
  return knex('goals').insert([
    {id: 1, user_id:1, goal:"sample goal", enddate:""},
    {id: 2, user_id:2, goal:"sample goal", enddate:""},
    {id: 3, user_id:3, goal:"sample goal", enddate:""},
    {id: 4, user_id:4, goal:"sample goal", enddate:""},
    {id: 5, user_id:5, goal:"sample goal", enddate:""},
    {id: 6, user_id:6, goal:"sample goal", enddate:""},
    {id: 7, user_id:7, goal:"sample goal", enddate:""},
    {id: 8, user_id:8, goal:"sample goal", enddate:""},
    {id: 9, user_id:9, goal:"sample goal", enddate:""},
    {id: 10, user_id:10, goal:"sample goal", enddate:""},
    {id: 11, user_id:1, goal:"sample goal", enddate:""},
    {id: 12, user_id:2, goal:"sample goal", enddate:""},
    {id: 13, user_id:3, goal:"sample goal", enddate:""},
    {id: 14, user_id:4, goal:"sample goal", enddate:""},
    {id: 15, user_id:5, goal:"sample goal", enddate:""},
    {id: 16, user_id:6, goal:"sample goal", enddate:""},
    {id: 17, user_id:7, goal:"sample goal", enddate:""},
    {id: 18, user_id:8, goal:"sample goal", enddate:""},
    {id: 19, user_id:9, goal:"sample goal", enddate:""},
    {id: 20, user_id:10, goal:"sample goal", enddate:""},
    {id: 21, user_id:1, goal:"sample goal", enddate:""},
    {id: 22, user_id:2, goal:"sample goal", enddate:""},
    {id: 23, user_id:3, goal:"sample goal", enddate:""},
    {id: 24, user_id:4, goal:"sample goal", enddate:""}

    ])
  .then(() => {
    return knex.raw("SELECT setval('goals_id_seq', (SELECT MAX(id) FROM goals));")
})
}