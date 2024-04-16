

export class Person{
    
    // public name:string;
    // private address: string;
    
    // constructor(name:string,address:string){ //es una funcion que se llama cuando creamos una instancia de una clase
    //     this.name='Miguel';
    //     this.address= 'Juliaca City'
    // }
    constructor(
        public firtsName:string,
        public lastName:string,
        private address:string = 'No dirección'
    ){}
}
// class Hero extends Person {
//     constructor(
//         public nick: string,
//         public age: number,
//         public realName: string
//     ){
//         super(realName,'New York');
//     }
// }

class Hero{
    constructor(
        public hero:string,
        public age: number,
        public person: Person
    ){}
}


// const ironman = new Person('Miguel','Juliaca');
const heroe= new Person('Steve', 'Rogers','Queens');
const heroe1= new Hero('Capitan America',40,heroe);

console.log(heroe1);

// console.log(ironman);
// console.log(hero1);
