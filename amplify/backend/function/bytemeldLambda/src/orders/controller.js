const express = require('express');
const service = require('./service');

const router = express.Router();

router.post('/', function(req, res) {
  service.saveOrder(req.body);
  res.json({success: 'post call succeed!', url: req.originalUrl});
});

module.exports = router;
