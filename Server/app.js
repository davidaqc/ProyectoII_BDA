var express = require("express");
var logger = require ("morgan");
var bodypParser = require ("body-parser");
var neo4j = require("neo4j-driver");
var cors = require('cors');
var corsMiddleware = require('./cors/cors');
var router = express.Router();

//Variables requeridas para el HTTPS
const fs = require('fs')
const https = require('http')
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
const voluntarioRoute = require('./routes/voluntarios')
const organizacionRoute = require('./routes/organizaciones')
const proyectoRoute = require('./routes/proyectos')

//Uso de las Routes
app.use('/voluntarios', voluntarioRoute)
app.use('/organizaciones', organizacionRoute)
app.use('/proyectos', proyectoRoute)

//View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//default
app.use(logger("dev"));
app.use(bodypParser.json());
app.use(bodypParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

//Conexion con la base de datos
var driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "root"));
var session = driver.session({
  database: 'ventaproductos',
  defaultAccessMode: neo4j.session.WRITE
})

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
    console.log(`Node server running on http://localhost:${port}`);
});

module.exports = app;