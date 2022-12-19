const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'ADDRESS_OF_MYSQL_SERVER',
  port: 3306,
  user: 'USERNAME',
  password: 'YOUR_PASSWORD',
  database: 'DATABASE_NAME'
});
connection.connect((err) => {
  if (!err) { 
    console.log("SUCCESS");
  }
});

connection.query('SELECT name FROM clients', 
(err, data) => {
  if (!err) {
    console.log(data);
  }
});

app.get('/task:id', (req, res) => {
    connection.query('SELECT Task_description FROM headsss;', 
    (err, data) => {
      if (err) return res.status(500);
      res.json(data);
    })
  });