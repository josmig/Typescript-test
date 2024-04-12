
//Creacion de la interface del objeto superHero
// interface SuperHero{
//     name: string,
//     age: number,
//     address: {
//         calle: string,
//         pais: string,
//         ciudad: string
//     }
//     showAddress: () => string
// }
interface SuperHero{ //Recomendacion separa los objetos para un mejor mantenimiento
    name: string;
    age: number;
    address: Address;
    showAddress: () => string
}

interface Address{
    street: string;
    country: string;
    city: string;
}


const superHero: SuperHero ={
     name: 'Hulk',
     age: 100,
     address:{
        street:'Jr Serafin Firpo',
        country: 'Perú',
        city:'Juliaca'
     },
     showAddress() {
         return this.name + ',' + this.address.city + ', ' + this.address.country;
     }
}

const direccion = superHero.showAddress();
console.log(direccion);



