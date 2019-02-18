const knex = require('../db/knex')

function addAGoal(body) {
  return knex('goals')
    .insert({
      'user_id': body.user_id,
      'goal':body.goal
    })
    .returning('*')
    .then(result => result)
}

function getOneUserGoals(userId) {
  return knex('goals')
    .where({
      'goals.user_id': userId
    })
    .returning('*')
    .then(result => result)
}

function deleteGoal(goalId) {
  return knex('goals')
    .where({
      'goals.id': goalId
    })
    .del()
    .returning('*')
    .then(result => result)
}

module.exports = {
  addAGoal,
  getOneUserGoals,
  deleteGoal
}