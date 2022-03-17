const express = require('express');
const router = express.Router();
const { createAuth } = require('../controllers/auth');

router.route('/login')
    .post(createAuth)

module.exports = router;