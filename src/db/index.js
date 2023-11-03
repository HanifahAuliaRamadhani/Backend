const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'jwttoken',
  password: 'HaNi_15*',
  port: 5432,
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
