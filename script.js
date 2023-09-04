const estudiantes = [
    {
        nombre: "Juan",
        edad: 18,
        calificaciones: [85, 92, 78],
    },
    {
        nombre: "Maria",
        edad: 22,
        calificaciones: [90, 88, 95],
    },
    {
        nombre: "Carlos",
        edad: 19,
        calificaciones: [78, 86, 89],
    },
    {
        nombre: "Laura",
        edad: 21,
        calificaciones: [75, 91, 82],
    },
    {
        nombre: "Pedro",
        edad: 23,
        calificaciones: [88, 84, 90],
    },
    {
        nombre: "Ana",
        edad: 20,
        calificaciones: [92, 87, 89],
    },
    {
        nombre: "Luis",
        edad: 21,
        calificaciones: [85, 90, 79],
    },
    {
        nombre: "Isabel",
        edad: 22,
        calificaciones: [91, 88, 87],
    },
    {
        nombre: "Sofia",
        edad: 19,
        calificaciones: [78, 85, 92],
    },
    {
        nombre: "Diego",
        edad: 24,
        calificaciones: [90, 92, 85],
    },
    {
        nombre: "Carmen",
        edad: 20,
        calificaciones: [89, 91, 88],
    },
    {
        nombre: "Javier",
        edad: 23,
        calificaciones: [84, 87, 90],
    },
    {
        nombre: "Elena",
        edad: 21,
        calificaciones: [78, 79, 83],
    },
    {
        nombre: "Fernando",
        edad: 22,
        calificaciones: [90, 85, 91],
    },
    {
        nombre: "Marta",
        edad: 20,
        calificaciones: [89, 88, 85],
    },
    {
        nombre: "Roberto",
        edad: 24,
        calificaciones: [86, 92, 87],
    },
    {
        nombre: "Andrea",
        edad: 22,
        calificaciones: [91, 79, 84],
    },
    {
        nombre: "Patricia",
        edad: 20,
        calificaciones: [88, 90, 92],
    },
    {
        nombre: "Daniel",
        edad: 21,
        calificaciones: [87, 85, 90],
    },
    {
        nombre: "Lucia",
        edad: 23,
        calificaciones: [85, 91, 87],
    },
    {
        nombre: "Natalia",
        edad: 20,
        calificaciones: [92, 88, 86],
    },
    {
        nombre: "Alejandro",
        edad: 22,
        calificaciones: [85, 89, 91],
    },
    {
        nombre: "Valeria",
        edad: 21,
        calificaciones: [87, 84, 88],
    },
    {
        nombre: "Hugo",
        edad: 24,
        calificaciones: [90, 86, 85],
    },
    {
        nombre: "Camila",
        edad: 20,
        calificaciones: [88, 91, 89],
    },
    {
        nombre: "Eduardo",
        edad: 23,
        calificaciones: [85, 90, 87],
    },
    {
        nombre: "Adriana",
        edad: 22,
        calificaciones: [89, 85, 92],
    },
    {
        nombre: "Raul",
        edad: 20,
        calificaciones: [91, 87, 90],
    },
    {
        nombre: "Cecilia",
        edad: 21,
        calificaciones: [84, 92, 88],
    },
    {
        nombre: "Fernanda",
        edad: 22,
        calificaciones: [90, 88, 85],
    },
    {
        nombre: "Pablo",
        edad: 24,
        calificaciones: [92, 86, 87],
    },
    {
        nombre: "Lorena",
        edad: 23,
        calificaciones: [87, 91, 89],
    },
    {
        nombre: "Gustavo",
        edad: 20,
        calificaciones: [88, 90, 85],
    },
    {
        nombre: "Sara",
        edad: 21,
        calificaciones: [91, 84, 86],
    },

];
// funcion que filtra a los estudiantes mayores de edad
const mayoresEdad = (estudiantes) => {
    return estudiantes.filter((estudiante) => estudiante.edad > 18)
}
console.log(mayoresEdad(estudiantes))

// array que almacena los promedios generales de los estudiantes
let promediosGeneral = []

// funcion que Calcula el promedio de cada estudiante y lo almacena en el array promediosGeneral
const calculoPromedios = estudiantes.map((estudiante) => {
    let suma = estudiante.calificaciones.reduce((a, b) => a + b)
    let promedio = parseFloat(suma / estudiante.calificaciones.length)
    promediosGeneral.push({ nombre: estudiante.nombre, promedio: promedio })
})
console.log(promediosGeneral)

// + función que muestra el nombre, la edad y el promedio de cada estudiante
const nombreEstudiantes = (estudiantes, promediosGeneral) => {
    estudiantes.forEach((estudiante, promedio) => {
        console.log(`Alumno: ${estudiante.nombre}, Edad: ${estudiante.edad}, Promedio: ${promedio}`)
    })
}
console.log(nombreEstudiantes(estudiantes, promediosGeneral))

// funcion que ordena a los estudiantes por edad
const orderByAge = (estudiantes) => {
    estudiantes.sort((a, b) => a.edad - b.edad)
    return estudiantes
}

//  función que  encuentra al mejor estudiante en la segunda materia
const betterStudent = (estudiantes) => {
    let mejorNota = 0
    let estudiante = ""
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].calificaciones[1] >= mejorNota) {
            mejorNota = estudiantes[i].calificaciones[1]
            estudiante = estudiantes[i]
        }
    }
    console.log(`El mejor estudiante en la 2da materia es ${estudiante.nombre} de ${estudiante.edad} años con una nota de ${estudiante.calificaciones[1]}`)
}

// función que calcula la edad promedio de los estudiantes
const edadPromedio = (estudiantes) => {
    let suma = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.edad, 0)
    return parseInt(suma / estudiantes.length)
}

//  función que encuentra a los estudiantes con un promedio mayor o igual a 90
const betterStudents = (estudiantes, promediosGeneral) => {
    let mejores = []
    for (let i = 0; i < estudiantes.length; i++) {
        if (promediosGeneral[i].promedio >= 90) {
            mejores.push({ Estudiante: estudiantes[i].nombre, Promedio: promediosGeneral[i].promedio })
        }
    }
    return mejores
}

console.log(orderByAge(estudiantes))
console.log(betterStudent(estudiantes))
console.log(edadPromedio(estudiantes))
console.log(betterStudents(estudiantes, promediosGeneral))
