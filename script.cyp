////////////////////////////////// INICIO ///////////////////////////////////////////////
//Crear Restricciones
CREATE CONSTRAINT key_Voluntario IF NOT EXISTS ON (a:Voluntario) ASSERT (a.name) IS NODE KEY;
CREATE CONSTRAINT notNull_Voluntario IF NOT EXISTS ON (a:Voluntario) ASSERT (a.name) IS NOT NULL;

CREATE CONSTRAINT key_Organizaciones IF NOT EXISTS ON (a:Organizaciones) ASSERT (a.name) IS NODE KEY;
CREATE CONSTRAINT notNull_Organizaciones IF NOT EXISTS ON (a:Organizaciones) ASSERT (a.name) IS NOT NULL;

CREATE CONSTRAINT key_Proyectos IF NOT EXISTS ON (a:Proyectos) ASSERT (a.name) IS NODE KEY;
CREATE CONSTRAINT notNull_Proyectos IF NOT EXISTS ON (a:Proyectos) ASSERT (a.name) IS NOT NULL;

//Voluntarios
CREATE (Cristian:Voluntario {name: "Cristian", age: 24, country: "Costa Rica"})
CREATE (Melany:Voluntario {name: "Melany", age: 24, country: "Costa Rica"})
CREATE (Julian:Voluntario {name: "Julian", age: 24, country: "Costa Rica"})
CREATE (David:Voluntario {name: "David", age: toInteger(25), country: "Costa Rica"})

//Organizaciones
CREATE (TEC:Organizaciones {name: "Tecnologico de Costa Rica", country: "Costa Rica"})
CREATE (FBB:Organizaciones {name: "Fundacion Bandera Blanca", country: "Costa Rica"})
CREATE (SINAC:Organizaciones {name: "Sistema Nacional de Areas de Conservacion", country: "Costa Rica"})

//Proyectos
CREATE (P1:Proyectos {name: "Test1", country: "Costa Rica", targetPopulation: "Hospitales", durationWeeks: 3})
CREATE (P2:Proyectos {name: "Test2", country: "Nicaragua", targetPopulation: "Escuelas", durationWeeks: 2})
CREATE (P3:Proyectos {name: "Test3", country: "Panama", targetPopulation: "Adultos Mayores", durationWeeks: 1})

//Relaciones
//Organiza
CREATE (SINAC)-[:Organiza]->(P1)
CREATE (TEC)-[:Organiza]->(P2)
CREATE (FBB)-[:Organiza]->(P3)

//ParticipaEn
CREATE (Cristian)-[:ParticipaEn]->(P1)
CREATE (Melany)-[:ParticipaEn]->(P2)
CREATE (Julian)-[:ParticipaEn]->(P3)
CREATE (David)-[:ParticipaEn]->(P3)


////////////////////////////////// FIN ///////////////////////////////////////////////
//Eliminar Restricciones
DROP CONSTRAINT constraint_name

//Este se usa cuando se estan creando los nodos que participan en la relacion
CREATE (Cristian)-[:ParticipaEn]->(P1);

//Este se usa cuando ya se han creado los nodos
MATCH
  (a:Voluntario),
  (b:Proyectos)
WHERE a.name = "Cristian" AND b.name = "Test1"
CREATE (a)-[r:ParticipaEn]->(b)
RETURN type(r)

//Ver todo
MATCH (n) RETURN n 

//Modificar propiedades
MATCH (a:Voluntario {name: "Julian"})
SET a.name = "Julian"
RETURN a

//Eliminar un nodo
MATCH (Julian:Voluntario {name: "Julian"})
DETACH DELETE Julian
//Eliminar todos los nodos y relaciones
MATCH (n)
DETACH DELETE n
//Eliminar relaciones
MATCH (n {name: 'Cristian'})-[r:ParticipaEn]->()
DELETE r