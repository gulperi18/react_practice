var express = require('express');
var router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'Students',
  user: 'postgres',
  password: 'peppa',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})


/* GET home page. */
router.get('/', function(req, res, next) {

  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query(`SELECT * FROM stud `,
      (err, result) => {
        release()
        if (err) {
          return console.error('Error executing query', err.stack)
        }
        console.log(result.rows);

      })
  })

  
  res.render('index', { title: 'Express' });
});



module.exports = router;
