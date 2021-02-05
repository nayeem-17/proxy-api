var express = require('express');
const fetchdata = require('../services/fetchData');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/:username', fetchdata);


module.exports = router;
