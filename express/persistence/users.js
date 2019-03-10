const sql = require('sql-template-strings')
const uuid = require('uuid/v4')
const bcrypt = require('bcrypt')
const db = require('../db/db')

module.exports = {
  async create(email, password) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10)

      const { rows } = await db.query(sql`
      INSERT INTO users (id, email, password)
        VALUES (${uuid()}, ${email}, ${hashedPassword})
        RETURNING id, email;
      `)

      const [user] = rows
      return user
    } catch (e) {
      if (e.constraint === 'users_email_key') {
        return null
      }
      throw e
    }
  },
  async find(email) {
    const { rows } = await db.query(sql`
    SELECT * FROM users WHERE email=${email} LIMIT 1;
    `)
    return rows[0]
  }
}
