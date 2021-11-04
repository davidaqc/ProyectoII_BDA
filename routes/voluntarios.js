const express = require('express');
var neo4j = require("neo4j-driver");
const router = express.Router();

//Conexion con la base de datos
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "pass"));
var session = driver.session();

//GET
router.get("/", function (req, res) {
    session
        .run("MATCH(n:Voluntario) RETURN n LIMIT 100")
        .then(function (result) {
            var voluntariosArray = [];
            result.records.forEach(function (record) {
                voluntariosArray.push({
                    name: record._fields[0].properties.name,
                    age: record._fields[0].properties.age.low,
                    country: record._fields[0].properties.country
                })
            });
            res.json(voluntariosArray)
        })
        .catch(function (err) {
            console.log(err);
        });
});

//POST
router.post("/add", function (req, res) {
    var name = req.body.name;
    var age = req.body.age;
    var country = req.body.country;

    console.log(req.body);

    if (name.replace(/\s/g, '') == '') {
        name = null;
    }

    session
        .run("CREATE(n:Voluntario {name: $nameParam, age: $ageParam, country: $countryParam}) RETURN n", {
            nameParam: name,
            ageParam: age,
            countryParam: country
        })
        .then(function (result) {
            console.log(result);
            res.status(201).json({ message: 'Handling POST request to /voluntarios/add' });
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({ message: 'There was an error during the POST!'})
        });

});

//POST
router.post("/proyectos", function (req, res) {
    var vName = req.body.vName;
    var pName = req.body.pName

    if (vName.replace(/\s/g, '') == '') {
        vName = null;
    }
    if (pName.replace(/\s/g, '') == '') {
        pName = null;
    }

    session
        .run("MATCH(a:Voluntario {name: $vNameParam}), (b:Proyectos {name: $pNameParam}) CREATE (a)-[r:ParticipaEn]->(b) RETURN type(r)", {
            vNameParam: vName,
            pNameParam: pName
        })
        .then(function (result) {
            if (result.records[0] == undefined) {
                return res.status(404).json({ message: 'Either the volunteer name or the project name has not been found' })
            } else {
                res.status(201).json({ message: 'Handling POST request to /voluntarios/proyectos' });
            }
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({ message: 'There was an error during the POST!' })
        });
});

module.exports = router
