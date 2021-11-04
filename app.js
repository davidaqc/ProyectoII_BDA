var express = require("express");
var logger = require ("morgan");
var bodypParser = require ("body-parser");
var neo4j = require("neo4j-driver");
var cors = require('cors');
var corsMiddleware = require('./cors/cors');
var router = express.Router();

//Variables requeridas para el HTTPS
const fs = require('fs')
const https = require('https')
const path = require('path')
const port = 3000

//Asignacion del express
var app = express();

//Definiciones para el CORS
app.use(express.json({ limit: "100mb" }));
app.options('*', corsMiddleware);
app.use(corsMiddleware);
app.use(cors());


//Importacion de Routes
const voluntariosRoute = require('./routes/voluntarios')
const organizacionesRoute = require('./routes/organizaciones')
const proyectosRoute = require('./routes/proyectos')
const consultasRoute = require('./routes/consultas')

//Uso de las Routes
app.use('/voluntarios', voluntariosRoute)
app.use('/organizaciones', organizacionesRoute)
app.use('/proyectos', proyectosRoute)
app.use('/consultas', consultasRoute)

//View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//default
app.use(logger("dev"));
app.use(bodypParser.json());
app.use(bodypParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

//Conexion con la base de datos
var driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "pass"));
var session = driver.session();

//GET
app.get("/", function(req, res) {
  session
      .run("MATCH(n:Voluntario) RETURN n")
      .then(function(result){
          var voluntariosArray = [];
          var organizacionesArray = [];
          var proyectosArray = [];
          var resultArray = [voluntariosArray,organizacionesArray,proyectosArray];

          result.records.forEach(function(record){
              voluntariosArray.push(record._fields[0].properties);
          });

          session
              .run("MATCH(n:Organizaciones) RETURN n")
              .then(function(result2){
                result2.records.forEach(function(record2){
                    organizacionesArray.push(record2._fields[0].properties);
                });
                session
                    .run("MATCH(n:Proyectos) RETURN n")
                    .then(function(result3){
                      
                      result3.records.forEach(function(record3){
                        proyectosArray.push(record3._fields[0].properties);
                      });
                      
                      res.render("index",{
                        voluntarios: voluntariosArray,
                        organizaciones: organizacionesArray,
                        proyectos: proyectosArray
                      });
                      
                      //res.json(resultArray);
                    })
                    .catch(function(err){
                      console.log(err);
                    });
              })
              .catch(function(err){
                console.log(err);
              });
      })
      .catch(function(err){
          console.log(err);
      });
});

//codigo hhtps
https.createServer({
    cert: fs.readFileSync('./ssl/server.crt'),
    key: fs.readFileSync('./ssl/server.key')
  }, app).listen(port, function () {
    console.log(`Node server running on https://localhost:${port}`);
});

module.exports = app;