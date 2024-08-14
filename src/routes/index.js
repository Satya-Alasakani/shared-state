const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

// Root route handler
router.get('/', controller.handleRootRoute);

module.exports = router;