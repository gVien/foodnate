var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express!!!!' });
});

router.get('/signup_shelter', function(req, res, next) {
  res.render('signup_shelter', { title: 'Express!!!!' });
});

module.exports = router;

