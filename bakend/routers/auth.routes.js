// routes/user.routes.js
const express = require('express');
const { googleSignIn } = require('../controllers/auth.controllers');
const router = express.Router();

router.post('/google/signin', googleSignIn)

module.exports = router;
