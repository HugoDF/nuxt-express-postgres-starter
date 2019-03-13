const { Router } = require('express')
const bcrypt = require('bcrypt')

const User = require('../db/users')
const Session = require('../db/sessions')

const sessionMiddleware = require('../middleware/session-middleware')

const router = new Router()

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.find(email)
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(403).json({})
    }
    const sessionId = await Session.create(user.id)
    req.session.id = sessionId
    res.status(201).json()
  } catch (e) {
    console.error(`POST session ({ email: ${req.body.email} }) >> ${e.stack})`)
    res.status(500).json()
  }
})

router.get('/', sessionMiddleware, (req, res) => {
  res.json({ userId: req.userId })
})

router.delete('/', async (req, res) => {
  try {
    if (req.session.id) {
      await Session.delete(req.session.id)
    }
    req.session.id = null
    res.status(200).json()
  } catch (e) {
    console.error(`DELETE session >> ${e.stack}`)
    res.status(500).json()
  }
})

module.exports = router
