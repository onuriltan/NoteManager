import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import mongoose from 'mongoose'
import helmet from 'helmet'
import { configurePassport } from './config/passport'
import { logger } from './config/pino'
import { configureAndRunMigrations } from './migrations'
import * as dotenv from 'dotenv'
import noteModule from './modules/notes'
import userModule from './modules/user'
require('module-alias/register')

const bootServer = async () => {
  // Environment Variables
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
  server.use('/api/notes', noteModule)
  server.use('/api/user', userModule)

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

  server.listen(port)
}

bootServer()
  .then(() => {
    logger.info('Server is ready.')
  })
  .catch((e) => {
    logger.error('Server is failed to boot.')
    logger.error(e)
  })
