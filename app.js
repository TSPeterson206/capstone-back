const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 8000

if(process.env.NODE_ENV !== 'production') require('dotenv').load()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '5mb'}))

app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auth'))
app.use('/providers', require('./routes/providers'))
app.use('/reviews', require('./routes/reviews'))
// app.use('/users/:id/favorites', require('./routes/favorites'))
app.use('/goals', require('./routes/goals'))
app.use('/favorites', require('./routes/favorites'))


app.use((req, res, next) => {
  next({status:404, message: 'Unable to locate'})
})

app.use((err, req, res, next) => {
	console.log(err)
	const error = {}
	if (process.env.NODE_ENV !== 'production' && err.stack) error.stack = err.stack
	error.status = err.status || 500
	error.message = err.message || `Internal Server Error`

	console.error(error.message)
	res.status(error.status).json(error)
})

const listener = () => console.log(`Listening on ${port}`)
app.listen(port, listener)