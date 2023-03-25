
class PersonajeFicticio {
    constructor(nombre, apellido, correo, genero, edad, ocupacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.genero = genero;
        this.edad = edad;
        this.ocupacion = ocupacion;
    }
}

let personajes = [];


for (let i = 0; i < 200; i++) {
    personajes.push(new PersonajeFicticio(
        faker.name.firstName(),
        faker.name.lastName(),
        faker.internet.email(),
        generarGeneroAleatorio(),
        faker.random.number({ min: 18, max: 100 }),
        faker.name.jobTitle()
    ));
}


function generarGeneroAleatorio() {
    return Math.random() < 0.5 ? 'male' : 'female';
}


/**
 * En este ejemplo, la función filtrarEdadGeneroOcupacion 
 * toma una lista de personajes 
 * y tres filtros (edad, género y ocupación). 
 * 
 * La función filtra a los personajes 
 * que cumplen con los criterios especificados.
 * 
 * Mayores o iguales de la edad, su genero y si contiene la palabra que ocupa.
 */
 
function filtrarEdadGeneroOcupacion(filtroEdad, filtroGenero, filtroOcupacion){
    return personajes.filter(personaje =>
        personaje.edad >= filtroEdad &&
        personaje.genero === filtroGenero &&
        personaje.ocupacion.includes(filtroOcupacion)
    );
}
console.log("Mayor de 30 que sea mujer y tenga un titulo de Ingeniero");
console.log(filtrarEdadGeneroOcupacion(30, 'female', 'Engineer'));
console.log(imprimePersonajes(filtrarEdadGeneroOcupacion(30, 'female', 'Engineer')));
console.log("Variable global: 'personajes' de tipo Lista [<PersonajeFicticio>] ");
console.log("Funciones:  ");
console.log("- filtrarEdadGeneroOcupacion(filtroEdad, filtroGenero, filtroOcupacion)  ");
console.log("- imprimePersonajes(lst_personaje)  ");


function imprimePersonajes(lst_personaje){
    lst_personaje.forEach(p => {
        console.log("Nombre: " + p.nombre + ", Apellido:" + p.apellido + ", Correo:" + p.correo + ", Genero:" + p.genero + ", Edad:" + p.edad + ", Ocupación:"+p.ocupacion);
    
});
}
