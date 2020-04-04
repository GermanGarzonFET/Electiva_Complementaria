const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar', (req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('yo soy agregar de estudiantes');
    res.render('estudiantes/agregar');

});
router.post('/agregar', (req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('yo soy agregar de estudiantes');
    res.render('estudiantes/agregar');
    const { nombre } = req.body;

});

router.get('/eliminar', (req, res) => {
    console.log('yo soy eliminar de estudiantes');
    //res.send('yo soy eliminar de estudiantes');
    res.render('estudiantes/eliminar');
});

router.get('/modificar', (req, res) => {
    console.log('yo soy modifica de estudiantes');
    //res.send('yo soy modificar de estudiantes');
    res.render('estudiantes/modificar');
});

router.get('/consultar', async(req, res) => {
    console.log('yo soy consultar de estudiantes');
    //res.send('yo soy consultar de estudiantes ');

    const estu = await pool.query('select * from estudiantes');
    res.render('estudiantes/consultar', { estu });
});

module.exports = router;