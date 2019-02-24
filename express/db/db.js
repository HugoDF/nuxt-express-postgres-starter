const { Pool } = require('pg')

module.exports = Pool({
  connectionString: process.env.DATABASE_URL
})
