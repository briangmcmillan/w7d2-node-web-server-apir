// Libraries
var express = require('express')
var router = express.Router()

// SQLite3 Library (https://github.com/mapbox/node-sqlite3/wiki/API)
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./store.sqlite3')

// Routes
//Users
router.get('/users', function (req, res) {
  db.serialize(function () {
    // Your db code goes here, see SQLite3 library docs...
    db.all('SELECT * FROM users', (error, rows) => {
      if (req.query.format === 'html') {
        res.render('users.html', {
          users: rows
        })
      }
      else {
        res.json(rows)
      }
    })
  })
})
//Addresses
router.get('/addresses', function (req, res) {
  db.serialize(function () {

    // Your db code goes here, see SQLite3 library docs...
    db.all('SELECT * FROM addresses', (error, rows) => {
      if (req.query.format === 'html') {
        res.render('addresses.html', {
          addresses: rows
        })
      }
      else {
        res.json(rows)
      }
    })
  })
})
//Items
router.get('/items', function (req, res) {
  db.serialize(function () {

    // Your db code goes here, see SQLite3 library docs...
    db.all('SELECT * FROM items', (error, rows) => {
      if (req.query.format === 'html') {
        res.render('items.html', {
          items: rows
        })
      }
      else {
        res.json(rows)
      }
    })
  })
})
//Orders
router.get('/orders', function (req, res) {
  db.serialize(function () {

    // Your db code goes here, see SQLite3 library docs...
    db.all('SELECT * FROM orders', (error, rows) => {
      if (req.query.format === 'html') {
        res.render('orders.html', {
          orders: rows
        })
      }
      else {
        res.json(rows)
      }
    })
  })
})
//Schema_migrations
router.get('/schema_migrations', function (req, res) {
  db.serialize(function () {

    // Your db code goes here, see SQLite3 library docs...
    db.all('SELECT * FROM schema_migrations', (error, rows) => {
      if (req.query.format === 'html') {
        res.render('schema_migrations.html', {
          schema_migrations: rows
        })
      }
      else {
        res.json(rows)
      }
    })
  })
})

module.exports = router
