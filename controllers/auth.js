const authModel = require('../models/auth')
const jwt = require('jsonwebtoken')

function login (req, res, next) {
  const {username, password} = req.body

  if(!username && !password) return next({status: 400, message:'Error with username or password'})
  return authModel.login(username, password)
  .then((result) => {
    const payload = { exp: (Date.now() / 1000) + 7200, sub: result }
    const token = jwt.sign(payload, process.env.SECRET)
    res.status(200).send({ token })
  })
  .catch(next)
}

function authenticate(req, res, next) {

  if (!req.headers.authorization)
  return next({ status: 401, message: 'Authentication Failed' })

  const [bearer, token] = req.headers.authorization.split(' ')

  jwt.verify(token, process.env.SECRET, (err, payload) => {
    if(err) return next({ status: 401, message: 'Unauthorized, token not confirmed' })
    req.claim = payload
    next()
  })
}

function authStatus(req, res, next) {
  res.status(200).send({id:req.claim.sub.id, username:req.claim.sub.username})
}

function checkRequest(req, res, next) {
  const id = req.params.accountId
  if (+id !== req.claim.sub.id) return next({ status: 401, message: 'Unauthorized, ids dont match' })
  next()
}

module.exports = {
  login, authenticate, authStatus, checkRequest
}
