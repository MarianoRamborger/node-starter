const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/health', function(req, res, next) {
  res.status(200).send("Server: up!")
});

module.exports = router;