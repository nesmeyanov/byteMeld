const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.json({success: 'get call succeed!', url: req.originalUrl});
});

module.exports = router;
