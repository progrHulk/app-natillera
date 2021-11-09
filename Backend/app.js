"use strict";

//Cargar module node para crear sevidor
const express = require("express");
const bodyParser = require("body-parser");

//Ejecutar express (http)
var app = express();

//Cargar ficheros rutas
var article_routes = require("./routes/article");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CORS

//Añadir prefijos a rutas / cargar rutas
app.use("/api", article_routes);

//Exportar modulo (fichero actual)
module.exports = app;
