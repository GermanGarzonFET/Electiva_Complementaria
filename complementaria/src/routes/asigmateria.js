const express = require('express');
const router = express.Router();
const pool = require('../database');


router.get('/agregar', (req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('yo soy agregar de estudiantes');
    res.render('estudiantes/agregar');

});
router.post('/agregar', (req, res) => {
    console.log('yo soy agregar de asigmateria');
    //res.send('yo soy agregar de estudiantes');
    res.render('asigmateria/agregar');
    const { nombre } = req.body;

});

router.get('/eliminar', (req, res) => {
    console.log('yo soy eliminar de asigmateria');
    //res.send('yo soy eliminar de estudiantes');
    res.render('asigmateria/eliminar');
});

router.get('/modificar', (req, res) => {
    console.log('yo soy modifica de asigmateria');
    //res.send('yo soy modificar de estudiantes');
    res.render('asigmateria/modificar');
});

router.get('/consultar', async(req, res) => {
    console.log('yo soy consultar de asigmateria');
    //res.send('yo soy consultar de estudiantes ');

    const asig = await pool.query('select * from asigna_materia_docente');

    res.render('asigmateria/consultar', { asig });
});

module.exports = router;