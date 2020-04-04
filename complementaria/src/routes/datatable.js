const express = require('express');
const router = express.Router();


router.get('/datatable', (req, res) => {

    res.render('video/datatables');
});




module.exports = router;