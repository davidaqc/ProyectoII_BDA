# Bases de Datos Avanzadas - Proyecto Grupal II

## Integrantes
- Melany Acuña Vega
- Julian Bloise 
- David Quesada Calderón
- Cristian Marin Murilo

## Instrucciones de uso

### Configurar el proyecto

**Cliente**

Instale algunos modulos de Angular:

```
npm install --save-dev @angular-devkit/build-angular
```

Ejecute la aplicación:

```
ng serve
```

**Server**
URLS:
Usar:
-> npm install 
para las dependencias

El api se inicia con npm start

GETS:
Nodos:
https://localhost:3000/voluntarios
https://localhost:3000/organizaciones
https://localhost:3000/proyectos
Consultas:
https://localhost:3000/consultas/3
https://localhost:3000/consultas/5

POST:
Consultas:
https://localhost:3000/consultas/1
https://localhost:3000/consultas/2
https://localhost:3000/consultas/4

Agregar nodos:
https://localhost:3000/voluntarios/add
https://localhost:3000/organizaciones/add
https://localhost:3000/proyectos/add
Relaciones:
https://localhost:3000/voluntarios/proyectos
https://localhost:3000/organizaciones/proyectos

Ejemplo Voluntario:
{
    "name": "David Calderon",
    "age": 24,
    "country": "Costa Rica"
}

Ejemplo Organizacion:
{
    "name": "Test1",
    "country": "Costa Rica"
}

Ejemplo Proyecto:
{
    "name": "Test4",
    "country": "Costa Rica",
    "targetPopulation": "Adultos Mayores",
    "durationWeeks":3
}

Ejemplo Consulta1:
{
    "name": "Test4"
}

Ejemplo Consulta2:
{
    "name": "Test1"
}

Ejemplo Consulta4:
{
    "name": "Cristian"
}

Consultas 3 y 5 no requieren JSON





