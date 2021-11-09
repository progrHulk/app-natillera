'use strict'

var validator = require('validator');
var Article = require('../models/article');

var controller = {
    datosCurso: (req, res) => {
        var hola = req.body.hola;

        return res.status(200).send({
            mensaje: 'conexión exitosa',
            autor: 'Harold Arbelaez',
            url: 'LaNatillera.com',
            hola
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            mensaje: 'Soy el test del controlador de articulos'
        });
    },
    save: (req, res) => {
        var params = req.body;

        // validar datos 
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        } catch (err) {
            return res.status(200).send({
                message: 'Faltan datos por enviar!!'
            });
        }

        if (validate_title && validate_content) {

            // Crear objeto a guardar
            var article = new Article();

            // Asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            // Guardar articulo

            //Devolver una respuesta

            return res.status(200).send({
                status: 'success',
                article
            });
        }else{
            return res.status(200).send({
                message: 'Los datos no son validos!'
            });
        }

    }
}; // end controller

module.exports = controller;