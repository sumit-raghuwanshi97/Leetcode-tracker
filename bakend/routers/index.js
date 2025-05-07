const express = require('express');
const router = express.Router();

const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');

router.use('/user', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;
