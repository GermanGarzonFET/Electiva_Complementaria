const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar', (req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('yo soy agregar de estudiantes');
    res.render('estudiantes/agregar');

});
router.post('/agregar', (req, res) => {
    console.log('yo soy agregar de peracademico');
    //res.send('yo soy agregar de estudiantes');
    res.render('peracademico/agregar');
    const { nombre } = req.body;

});

router.get('/eliminar', (req, res) => {
    console.log('yo soy eliminar de peracademico');
    //res.send('yo soy eliminar de estudiantes');
    res.render('peracademico/eliminar');
});

router.get('/modificar', (req, res) => {
    console.log('yo soy modifica de peracademico');
    //res.send('yo soy modificar de estudiantes');
    res.render('peracademico/modificar');
});

router.get('/consultar', async(req, res) => {
    console.log('yo soy consultar de peracademico');
    //res.send('yo soy consultar de estudiantes ');

    const perc = await pool.query('select * from periodo_academico');
    res.render('peracademico/consultar', { perc });
});

module.exports = router;