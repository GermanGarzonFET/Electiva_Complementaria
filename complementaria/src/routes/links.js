const express = require('express');
const router = express.Router();
const pool = require('../database');


router.get('/add', (req, res) => {
    // res.send('ho yeaa');
    res.render('links/asteriscos');
});

router.post('/add', (req, res) => {
    res.render('links/astericos');


});


module.exports = router;