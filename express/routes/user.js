const { Router } = require('express')
const User = require('../persistence/users')

const router = new Router()

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.create(email, password)
    if (!user) {
      return res.status(400).json({ message: 'User already exists' })
    }
    return res.status(200).json(user)
  } catch (e) {
    console.error(
      `createUser({ email: ${req.body.email} }) >> Error: ${e.stack}`
    )
    res.status(500).json()
  }
})

module.exports = router
