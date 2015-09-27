var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var User = require('../models/users');

/* GET users listing. */
/* GET Userlist page. */
router.get('/', function(req, res) {
  res.render('user')
});

router.get('/donate', function(req, res) {
  res.render('donate')
});

router.get('/signup', function(req, res, next) {
  res.render('signup_shelter', {
    title: "TITLE!!"
  });
});

module.exports = router;
