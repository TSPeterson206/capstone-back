const knex = require('../db/knex')

function addGoal (body) {
  console.log(body)
  return knex('goals')
    .insert({
      'id': body.id,
      'user_id': body.user_id,
      'goal': body.goal,
      'enddate': body.enddate
    })

    .returning('*')
    .then(result => result)
}

function getOneUserGoals (userId) {
  return knex('goals')
    .where({
      'goals.user_id': userId
    })
    .returning('*')
    .then(result => result)
}

function deleteGoal (goalId) {
  return knex('goals')
    .where({
      'goals.id': goalId
    })
    .del()
    .returning('*')
    .then(result => result)
}

module.exports = {
  addGoal,
  getOneUserGoals,
  deleteGoal
}
