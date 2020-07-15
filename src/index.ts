import logger, { LogLevelDesc } from 'loglevel'
import { startServer } from './start'

require('dotenv').config()

const isTest = process.env.NODE_ENV === 'test'
const logLevel: LogLevelDesc = isTest ? 'warn' : 'info'

logger.setLevel(logLevel)

startServer()
