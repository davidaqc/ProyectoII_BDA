const express = require('express');
var neo4j = require("neo4j-driver");
const router = express.Router();

//Conexion con la base de datos
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "pass"));
var session = driver.session();

//GET
router.get("/", function (req, res) {
    session
        .run("MATCH(n:Organizaciones) RETURN n LIMIT 100")
        .then(function (result) {
            var organizacionesArray = [];
            result.records.forEach(function (record) {
                organizacionesArray.push({
                    name: record._fields[0].properties.name,
                    country: record._fields[0].properties.country
                })
            });
            res.json(organizacionesArray)
        })
        .catch(function (err) {
            console.log(err);
        });
});

//POST
router.post("/add", function (req, res) {
    var name = req.body.name;
    var country = req.body.country;

    if (name.replace(/\s/g, '') == '') {
        name = null;
    }

    session
        .run("CREATE(n:Organizaciones {name: $nameParam, country: $countryParam}) RETURN n", {
            nameParam: name,
            countryParam: country
        })
        .then(function (result) {
            console.log(result);
            res.status(201).json({ message: 'Handling POST request to /organizaciones/add' });
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({ message: 'There was an error during the POST!' });
        });
});

//POST
router.post("/proyectos", function (req, res) {
    var oName = req.body.oName;
    var pName = req.body.pName

    if (oName.replace(/\s/g, '') == '') {
        oName = null;
    }
    if (pName.replace(/\s/g, '') == '') {
        pName = null;
    }

    session
        .run("MATCH(a:Organizaciones {name: $oNameParam}), (b:Proyectos {name: $pNameParam}) CREATE (a)-[r:Organiza]->(b) RETURN type(r)", {
            oNameParam: oName,
            pNameParam: pName
        })
        .then(function (result) {
            if (result.records[0] == undefined) {
                return res.status(404).json({ message: 'Either the organization name or the project name has not been found' })
            } else {
                res.status(201).json({ message: 'Handling POST request to /organizaciones/proyectos' });
            }
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({ message: 'There was an error during the POST!' })
        });
});

module.exports = router
