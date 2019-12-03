const express = require('express');
const controllerAgenda = require('./controllers/controllerAgenda')
const router = express.Router();

router.post('/test', controllerAgenda);

router.get('/', (req, res)=>{
    res.render('layout');
});

module.exports = router;