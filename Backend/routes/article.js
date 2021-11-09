'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

// Rutas de prueba
router.post("/datos-curso", ArticleController.datosCurso);
router.get("/test-de-contolador", ArticleController.test);

// Rutas útiles
router.post('/save', ArticleController.save);

module.exports = router;