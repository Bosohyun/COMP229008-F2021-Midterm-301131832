// book.js
// Author: Bohyun Kim
// Student ID: 301131832
// Wep App name: Midterm

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
