
//funcion basica
// function addNumbres(a,b){
//     return a+b;
// }

// addNumbres(1,9);


//Funcion con Typescript
const addNumbersArrows = (a: number , b: number): string =>{
    return `${ a + b }`;
}

function pruebaFuncion(a: number,b: number): number{
    return a-b;
}

function multiplicacion( primerNumero: number, segundoNumero?: number, base: number=2){
    return primerNumero * base;
}



const resultado1: string = addNumbersArrows(1,54);
const resultado2: number = pruebaFuncion(1998,2024);
const multiply: number = multiplicacion(10);

// console.log(resultado1);
// console.log(resultado2);
// console.log({resultado1,resultado2, multiply});


//Funciones con Objetos

interface Personaje{
    name:string,
    hp: number,
    showUp: ()=> void
}
const vidaPersonaje = (personaje: Personaje, amount: number) => {
    personaje.hp += amount;
}
const personajePelicula: Personaje = {
    name: 'Aragon',
    hp: 120,
    showUp(){
        console.log(`Puntos de vida ${this.hp}`);
        
    }
}

vidaPersonaje(personajePelicula, 100);

personajePelicula.showUp();






 







export{};