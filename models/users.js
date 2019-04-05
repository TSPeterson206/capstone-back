const knex = require('../db/knex')
const bcrypt = require('bcrypt')

function getOneUser (userId) {
  return knex('users')
    .where({
      id: userId
    })
    .returning('*')
}

function signup (username, password, tagline, profilepic, soberdate) {
  return knex('users')
    .where({
      username
    })
    .then(([data]) => {
      if (data) {
        throw {
          status: 400,
          message: 'username already in use'
        }
      }
      return bcrypt.hash(password, 10)
    })
    .then((hashedPW) => {
      return knex('users')
        .insert({
          username,
          password: hashedPW,
          tagline,
          profilepic,
          soberdate
        })
        .returning('users.username')
    })
}

function getAllUsers () {
  return knex('users')
    .returning('*')
}

function editOneUser (userId, body) {
  return knex('users')
    .update({
      profilepic: body.profilepic,
      tagline: body.tagline,
      soberdate: body.soberdate
    })
    .where({
      id: userId
    })
    .returning('*')
}

module.exports = {
  signup,
  getOneUser,
  getAllUsers,
  editOneUser
}
