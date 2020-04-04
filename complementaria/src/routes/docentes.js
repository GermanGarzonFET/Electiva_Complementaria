const express = require('express');
const router = express.Router();
const pool = require('../database');


router.get('/agregar', (req, res) => {
    console.log('yo soy agregar de docentes');
    //res.send('yo soy agregar de doncentes');
    res.render('docentes/agregar');
});

router.get('/eliminar', (req, res) => {
    console.log('yo soy eliminar de doncentes');
    //res.send('yo soy eliminar de doncentes');
    res.render('docentes/eliminar');
});

router.get('/modificar', (req, res) => {
    console.log('yo soy modifica de doncentes');
    //res.send('yo soy modificar de doncentes');
    res.render('docentes/modificar');
});

router.get('/consultar', async(req, res) => {
    console.log('yo soy consultar de doncentes');
    //res.send('yo soy consultar de doncentes');

    const doc = await pool.query('select * from docentes');
    res.render('docentes/consultar', { doc });
});

module.exports = router;