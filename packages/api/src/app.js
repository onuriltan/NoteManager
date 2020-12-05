require('module-alias/register')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const mongoose = require('mongoose')
const helmet = require('helmet')
const { configurePassport } = require('@config/passport')
const { logger } = require('@config/pino')
const { configureAndRunMigrations } = require('@app/migrations')

const bootServer = async () => {
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

  try {
    logger.warn('Connecting to MongoDB...')
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    logger.info('MongoDB connected.')
  } catch (e) {
    logger.error('MongoDB failed to connect.')
    throw new Error(e)
  }

  // Run Mongo migrations
  await configureAndRunMigrations()

  configurePassport()

  // Routes
  server.use('/api/notes', require('./modules/notes'))
  server.use('/api/user', require('./modules/user'))

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

  try {
    logger.warn('Server is starting...')
    await server.listen(port)
    logger.info(`Server has started at port ${port}.`)
  } catch (e) {
    logger.error(`Error while starting the server`)
    throw new Error(e)
  }
}

bootServer()
  .then(() => {
    logger.info('Server is ready.')
  })
  .catch((e) => {
    logger.error('Server is failed to boot.')
    logger.error(e)
  })
