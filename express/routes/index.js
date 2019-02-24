const express = require('express')
const { Router } = express
const router = Router()

router.use(express.json())

router.get('/api/test', (req, res) => {
  res.send('hello')
})

module.exports = router
