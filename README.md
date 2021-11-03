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
Usar npm install para las dependencias
El api se inicia con npm start

GETS:
https://localhost:3000/voluntarios
https://localhost:3000/organizaciones
https://localhost:3000/proyectos

POST:
https://localhost:3000/voluntarios/add
https://localhost:3000/organizaciones/add
https://localhost:3000/proyectos/add

Voluntario:
{
    "name": "David Calderon",
    "age": 24,
    "country": "Costa Rica"
}

Organizacion:
{
    "name": "Test1",
    "country": "Costa Rica"
}

Proyecto:
{
    "name": "Manhattam",
    "country": "Costa Rica",
    "targetPopulation": "Adultos Mayores",
    "durationWeeks":3
}
