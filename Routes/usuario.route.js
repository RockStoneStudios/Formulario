const router = require('express').Router();
const {registrar,saludar} = require('../controller/Usuario.controller');


router.post('/registrar',registrar);
router.get('/hello',saludar);




module.exports = router;