const express = require('express');
const fetchdata = require('../services/fetchData');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    data: "yo bruh"
  })
});

router.get('/:username', fetchdata)

module.exports = router;
