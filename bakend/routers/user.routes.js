// routes/user.routes.js
const express = require('express');
const router = express.Router();

router.get ('/login', (req, res) => {

    res.status(200).json({
        success : true,
        user : "user",
    });
});

module.exports = router;
