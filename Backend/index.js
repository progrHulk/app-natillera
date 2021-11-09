"use strict";

var mongoose = require("mongoose");
var app = require("./app");
var port = 3900;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/api_rest_natillera", {
        useNewUrlParser: true})
    .then(() => {
        console.log("la conexion a mongodb se realizó correctamente!!");

        // Crear servidor y escuchar peticiones http
        app.listen(port, () => {
            console.log("Servidor corriendo en http://localhost:" + port);
        });
    });
