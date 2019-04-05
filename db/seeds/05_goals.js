exports.seed = function (knex, Promise) {
  return knex('goals').insert([
    { id: 1, user_id: 1, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 2, user_id: 2, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 3, user_id: 3, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 4, user_id: 4, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 5, user_id: 5, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 6, user_id: 6, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 7, user_id: 7, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 8, user_id: 8, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 9, user_id: 9, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 10, user_id: 10, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 11, user_id: 1, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 12, user_id: 2, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 13, user_id: 3, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 14, user_id: 4, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 15, user_id: 5, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 16, user_id: 6, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 17, user_id: 7, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 18, user_id: 8, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 19, user_id: 9, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 20, user_id: 10, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 21, user_id: 1, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 22, user_id: 2, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 23, user_id: 3, goal: 'sample goal', enddate: '03-01-2019' },
    { id: 24, user_id: 4, goal: 'sample goal', enddate: '03-01-2019' }
  ])
    .then(() => {
      return knex.raw("SELECT setval('goals_id_seq', (SELECT MAX(id) FROM goals));")
    })
}
