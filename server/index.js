const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const db = require('../database');

app.use(express.static(path.join(__dirname, '..', 'public')));


app.get('/', (req, res) => {
  res.render('index.html');
  db.getAll((results) => {
    res.json(results);
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
})

module.exports = app