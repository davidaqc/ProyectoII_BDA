const express = require('express');
var neo4j = require("neo4j-driver");
const router = express.Router();

//Conexion con la base de datos
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "pass"));
var session = driver.session();

//GET
router.get("/", function(req, res) {
    session
        .run("MATCH(n:Organizaciones) RETURN n LIMIT 100")
        .then(function(result){
            var organizacionesArray = [];
            result.records.forEach(function(record){
                organizacionesArray.push({
                    id: record._fields[0].identity.low,
                    name: record._fields[0].properties.name,
                    country: record._fields[0].properties.country
                })
            });
            res.json(organizacionesArray)
        })
        .catch(function(err){
            console.log(err);
        });
});

//POST
router.post("/add", function(req, res){
    var name = req.body.name;
    var country = req.body.country;

    if(name.replace(/\s/g, '') == ''){
        name = null;
    }

    session
        .run("CREATE(n:Organizaciones {name: $nameParam, country: $countryParam}) RETURN n", {
            nameParam: name,
            countryParam: country
        })
        .then(function(result){
            res.redirect("/organizaciones");
            
        })
        .catch(function(err){
            console.log(err);
        });
});

module.exports = router
