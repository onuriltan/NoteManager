const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const mongoose = require('mongoose')
const { configurePassport } = require('./config/passport')
const helmet = require('helmet')

// Environment Variables
const dotenv = require('dotenv')
dotenv.config()

// Middleware
const server = express()
server.use(bodyParser.json())
server.use(cors())
server.use(cookieParser())
server.use(passport.initialize())
server.use(helmet())

// Connect to Mongo
const dbAddress = process.env.MONGO_URL
mongoose
  .connect(dbAddress, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected.'))
  .catch((err) => console.log(err))

configurePassport()

// Routes
const notes = require('./modules/notes')
const user = require('./modules/user')

// TODO : Update Google Auth
// const google = require('./routes/api/auth/GooglePlusService');

server.use('/api/posts', notes)
server.use('/api/user', user)

// TODO : Update Google Auth
// server.use('/api/auth/google', google);

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.join(__dirname, '../dist')))
  server.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../dist/index.html'))
  )
  server.get(/.*/, (req, res) =>
    res.sendFile(path.join(__dirname, '../dist/index.html'))
  )
}

const port = process.env.PORT || 5000

server.listen(port, () => {
  console.log(`Server started at port ${port}`)
})
