const express = require('express');
const router = express.Router();

router.get('/vista1', (req, res) => {

    res.render('parcial/vista1');
});

router.get('/vista2', (req, res) => {

    res.render('parcial/vista2');
});



router.get('/vista3', (req, res) => {

    res.render('parcial/vista3');
});
router.post('/vista3', (req, res) => {

    res.render('parcial/vista3');
    console.log('');
});




router.get('/vista4', (req, res) => {

    res.render('parcial/vista4');
});
router.post('/vista4', (req, res) => {


    res.render('parcial/vista4');
});



router.get('/vista5', (req, res) => {

    res.render('parcial/vista5');
});
router.post('/vista5', (req, res) => {

    res.render('parcial/vista5');
});

module.exports = router;