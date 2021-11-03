const express = require('express');
var neo4j = require("neo4j-driver");
const router = express.Router();

//Conexion con la base de datos
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "pass"));
var session = driver.session();

//GET
router.get("/", function(req, res) {
    session
        .run("MATCH(n:Proyectos) RETURN n LIMIT 100")
        .then(function(result){
            var proyectosArray = [];
            result.records.forEach(function(record){
                proyectosArray.push({
                    id: record._fields[0].identity.low,
                    name: record._fields[0].properties.name,
                    country: record._fields[0].properties.country,
                    targetPopulation: record._fields[0].properties.targetPopulation,
                    durationWeeks: record._fields[0].properties.durationWeeks
                })
            });
            res.json(proyectosArray)
        })
        .catch(function(err){
            console.log(err);
        });
});

//POST
router.post("/add", function(req, res){
    var name = req.body.name;
    var country = req.body.country;
    var targetPopulation = req.body.targetPopulation;
    var durationWeeks = req.body.durationWeeks;

    if(name.replace(/\s/g, '') == ''){
        name = null;
    }

    session
        .run("CREATE(n:Proyectos {name: $nameParam, country: $countryParam, targetPopulation $targetParam, durationWeeks: $durationParam }) RETURN n", {
            nameParam: name,
            countryParam: country,
            targetPopulation: targetPopulation,
            durationWeeks: durationWeeks            
        })
        .then(function(result){
            res.redirect("/proyectos");            
        })
        .catch(function(err){
            console.log(err);
        });
});

module.exports = router
