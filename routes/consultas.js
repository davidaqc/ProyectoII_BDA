const express = require('express');
var neo4j = require("neo4j-driver");
const router = express.Router();

//Conexion con la base de datos
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "pass"));
var session = driver.session();

//POST Consulta 1
//Para una organización, presentar los proyectos que tiene asociados (nombre y país donde se desarrolla).
router.post("/1", function (req, res) {
    var name = req.body.name;
    session
        .run("MATCH(a:Organizaciones{name:$nameParam})-[:Organiza]->(n) return n.name , n.country", {
            nameParam: name
        })
        .then(function (result) {
            var resultadoArray = [];
            result.records.forEach(function (record) {
                resultadoArray.push({
                    name: record._fields[0],
                    country: record._fields[1]
                })
            });
            res.json(resultadoArray)
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({ message: 'There was an error during the Request!' })
        });
});

//POST Consulta 2
//Para un proyecto, presentar todos datos del proyecto y el nombre de los voluntarios que participan en él.
router.post("/2", function (req, res) {
    var name = req.body.name;
    session
        .run("MATCH (a:Proyectos{name:$nameParam})<--(b:Voluntario) RETURN  a.name,a.country, a.targetPopulation,a.durationWeeks, b.name", {
            nameParam: name
        })
        .then(function (result) {
            var resultadoArray = [];
            if (result.records[0] == undefined) {
                return res.status(404).json({ message: 'The project name has not been found or it does not have volunteers' })
            } else {
                result.records.forEach(function (record) {
                    resultadoArray.push({
                        name: record._fields[0],
                        country: record._fields[1],
                        targetPopulation: record._fields[2],
                        durationWeeks: record._fields[3].low,
                        vName: record._fields[4]
                    });
                })
                res.json(resultadoArray);
            }
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({ message: 'There was an error during the Request!' })
        })
});

//GET Consulta 3
//Presentar una lista de los proyectos (nombre y país), y la cantidad de voluntarios que participa en cada uno.
router.get("/3", function (req, res) {
    session
        .run("MATCH (a:Proyectos)<-[:ParticipaEn]-(r) RETURN  a.name,a.country, count(r)")
        .then(function (result) {
            var resultadoArray = [];
            if (result.records[0] == undefined) {
                return res.status(404).json({ message: 'No project has been found or they do not have volunteers' })
            } else {
                result.records.forEach(function (record) {
                    resultadoArray.push({
                        name: record._fields[0],
                        country: record._fields[1],
                        vQuantity: record._fields[2].low
                    })
                });
                res.json(resultadoArray);
            }
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({ message: 'There was an error during the Request!' })
        });
});

//POST Consulta 4
//Para un voluntario mostrar los proyectos (nombre, país y población meta) en los que está participando.
router.post("/4", function (req, res) {
    var name = req.body.name;
    session
        .run("MATCH(a:Voluntario{name:$nameParam})-[:ParticipaEn]->(r) RETURN r.name, r.country, r.targetPopulation", {
            nameParam: name
        })
        .then(function (result) {
            var resultadoArray = [];
            if (result.records[0] == undefined) {
                return res.status(404).json({ message: 'The volunteer name has not been found or it does not have projects' })
            } else {
                result.records.forEach(function (record) {
                    resultadoArray.push({
                        name: record._fields[0],
                        country: record._fields[1],
                        targetPopulation: record._fields[2]
                    })
                });
                res.json(resultadoArray);
            }
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({ message: 'There was an error during the Request!' })
        });
});

//GET Consulta 5
//Presentar una lista de las poblaciones meta y la cantidad de proyectos de voluntariado para cada población.
router.get("/5", function (req, res) {
    session
        .run("MATCH(a:Proyectos)<-[:ParticipaEn]-(r) RETURN a.targetPopulation, count(r)")
        .then(function (result) {
            var resultadoArray = [];
            if (result.records[0] == undefined) {
                return res.status(404).json({ message: 'No project has been found or they do not have volunteers' })
            } else {
                result.records.forEach(function (record) {
                    resultadoArray.push({
                        targetPopulation: record._fields[0],
                        vQuantity: record._fields[1].low
                    })
                });
                res.json(resultadoArray);
            }
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({ message: 'There was an error during the Request!' })
        });
});

module.exports = router
