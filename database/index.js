const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'TODOS'
});

connection.connect();

//queries here!
module.exports = {
  getAll: (callback) => {
    connection.query('SELECT * FROM TODOLIST', (err, results) => {
      if (err) {
        throw err;
      } else {
        callback(results);
      }
    })
  }
}

connection.end();