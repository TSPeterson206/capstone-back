const express = require('express')
const router = express.Router({
  mergeParams: true
})
const goalsCtrl = require('../controllers/goals')

router.get('/:userId', goalsCtrl.getOneUserGoals)
router.post('/', goalsCtrl.addGoal)
router.delete('/goals/:goalId', goalsCtrl.deleteGoal)

module.exports = router
