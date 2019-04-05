const usersModel = require('../models/users')
const cloudinary = require('cloudinary')

function signup (req, res, next) {
  const {
    username,
    password,
    tagline,
    profilepic,
    soberdate
  } = req.body
  if (!username && !password) {
    return next({
      status: 400,
      message: 'Username and Password required for creating an account'
    })
  }
  return usersModel.signup(username, password, tagline, profilepic, soberdate)
    .then(([data]) => {
      if (!data) {
        return next({
          status: 500,
          message: 'Something went wrong. Abandon all hope. The end is nigh friend.'
        })
      }
      next()
    })
    .catch(next)
}

function getOneUser (req, res, next) {
  return usersModel.getOneUser(req.params.userId)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'account not found'
        })
      }
      res.status(200).send(result)
    })
}

function getAllUsers (req, res, next) {
  return usersModel.getAllUsers()
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'accounts not found'
        })
      }
      res.status(200).send(result)
    })
}

function editOneUser (req, res, next) {
  let {
    profilepic,
    tagline,
    soberdate
  } = req.body

  soberdate = soberdate || undefined
  profilepic = profilepic || undefined
  tagline = tagline || undefined

  if (!profilepic && !tagline) {
    return next({
      status: 400,
      message: 'No input provided'
    })
  }

  req.body = {
    profilepic,
    tagline,
    soberdate
  }

  return usersModel.editOneUser(req.params.userId, req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'account not found'
        })
      }
      res.status(201).send({
        profilepic,
        tagline,
        soberdate
      })
    })
}

function uploadImage (req, res, next) {
  let imageurl
  cloudinary.config({
    cloud_name: 'capstone',
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  })
  cloudinary.v2.uploader.upload(req.body.image, (err, result) => {
    if (err) {
      return next({
        status: 500,
        message: 'the cloud is just someones elses computer'
      })
    }
    imageurl = result.url
    res.status(201).send({
      image: result.url
    })
  })
  return imageurl
}

module.exports = {
  signup,
  getOneUser,
  getAllUsers,
  editOneUser,
  uploadImage
}
