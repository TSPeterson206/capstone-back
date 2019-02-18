const model = require('../models/goals');

function addGoal(req, res, next) {
  let {
    goal,
    user_id
  } = req.body
  model.addGoal(req.body)
    .then((result) => {
      if (!result)
        return next({
          status: 500,
          message: "error"
        })
      res.status(201).send({
        goal,
        user_id
            })
    })
    .catch(next)
}

function getOneUserGoals(req, res, next) {
  model.getOneUserGoals(req.params.userId)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function deleteGoal(req, res, next) {
  return model.deleteGoal(req.params.goalId)
    .then((result) =>
      res.status(200).send(result)
    )
    .catch(err => next(err))
}

module.exports = {
  addGoal,
  getOneUserGoals,
  deleteGoal
}