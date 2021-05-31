const cors = require('cors');
const express = require('express');
const mysql = require('mysql');

const app = express();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.use(cors());


app.get('/test', (req, res) => {
  return res.end("done")
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Example app listening on ${port}!`);
});
