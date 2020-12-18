import { migrator } from 'mgdb-migrator'
import { modifyPostsSchema } from './1-modify-posts-collection'
import { logger } from '../config/pino'

export const configureAndRunMigrations = async () => {
  // Run migrations one by one
  try {
    logger.warn('Configuring migrator...')
    await migrator.config({
      log: true,
      // @ts-ignore
      logger: (level, ...args) => logger.info(...args),
      logIfLatest: true,
      collectionName: 'migrations',
      db: {
        connectionUrl: process.env.MONGO_URL,
        name: 'note-manager',
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      },
    })
    modifyPostsSchema(migrator)
  } catch (e) {
    logger.error('Error when running migrations.')
    throw new Error(e)
  }

  migrator.migrateTo('latest')
}
