const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar', (req, res) => {
    console.log('yo soy agregar de materias');
    //res.send('yo soy agregar de abministrativos');
    res.render('materias/agregar');
});

router.get('/eliminar', (req, res) => {
    console.log('yo soy eliminar de materias');
    //res.send('yo soy eliminar de abministrativos');
    res.render('materias/eliminar');
});

router.get('/modificar', (req, res) => {
    console.log('yo soy modifica de materias');
    //res.send('yo soy modificar de abministrativos');
    res.render('materias/modificar');
});

router.get('/consultar', async(req, res) => {
    console.log('yo soy consultar de materias');
    //res.send('yo soy consultar de abministrativos');

    const mat = await pool.query('select * from materia');
    res.render('materias/consultar', { mat });
});

module.exports = router;