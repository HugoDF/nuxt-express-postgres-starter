const express = require('express')
const { Router } = express
const router = Router()
const morgan = require('morgan')
const clientSession = require('client-sessions')
const helmet = require('helmet')

const { SESSION_SECRET } = require('../config')

const user = require('./user')
const session = require('./session')

router.use(morgan('short'))
router.use(express.json())
router.use(
  clientSession({
    cookieName: 'session',
    secret: SESSION_SECRET,
    duration: 24 * 60 * 60 * 1000
  })
)
router.use(helmet())

router.use('/api/users', user)
router.use('/api/sessions', session)

module.exports = router
