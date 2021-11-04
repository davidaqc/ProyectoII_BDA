var neo4j = require("neo4j-driver");

//Conexion con la base de datos
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "pass"));
var session = driver.session();