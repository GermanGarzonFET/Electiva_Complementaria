const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar', (req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('yo soy agregar de estudiantes');
    res.render('estudiantes/agregar');

});
router.post('/agregar', (req, res) => {
    console.log('yo soy agregar de notas');
    //res.send('yo soy agregar de estudiantes');
    res.render('notas/agregar');
    const { nombre } = req.body;

});

router.get('/eliminar', (req, res) => {
    console.log('yo soy eliminar de notas');
    //res.send('yo soy eliminar de estudiantes');
    res.render('notas/eliminar');
});

router.get('/modificar', (req, res) => {
    console.log('yo soy modifica de notas');
    //res.send('yo soy modificar de estudiantes');
    res.render('notas/modificar');
});

router.get('/consultar', async(req, res) => {
    console.log('yo soy consultar de notas');
    //res.send('yo soy consultar de estudiantes ');

    const not = await pool.query('select * from notas');

    res.render('notas/consultar', { not });
});

module.exports = router;