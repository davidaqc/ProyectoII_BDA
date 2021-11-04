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
                    id: record._fields[0].identity.low,
                    name: record._fields[0].properties.name,
                    age: record._fields[0].properties.age,
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
            res.status(201).json({ message: 'Handling POST request to /voluntarios/add' })
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({ message: 'There was an error during the POST!'})
        });

});

module.exports = router
