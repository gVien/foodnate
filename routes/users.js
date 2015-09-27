var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signup_shelter', function(req, res, next) {
  res.render('signup_shelter', {
    title: "TITLE!!"
  });
});

module.exports = router;
