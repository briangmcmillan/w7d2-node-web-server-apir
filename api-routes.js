// Libraries
var express = require('express')
var router = express.Router()

// SQLite3 Library (https://github.com/mapbox/node-sqlite3/wiki/API)
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./store.sqlite3')

// Routes
router.get('/users', function (req, res) {
  db.serialize(function () {

    // Your db code goes here, see SQLite3 library docs...
    db.all('SELECT * FROM users', (error, rows) => {
            res.json(rows)
        })
  })
})

module.exports = router
