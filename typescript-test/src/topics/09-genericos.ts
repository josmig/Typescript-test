

//any quita cualquier descripcion que tenga Typescript sobre el tipo de dato
// export function whatsType ( argument:any ){
//     return argument;
// }

//Forma de utilizar los genericos para evitar utilizar el tipo Any
export function whatsType<T> (argumentos: T) : T{
    
    return argumentos;
}

const valor = whatsType<string>('hola mundo');
const valor1 = whatsType<number>(123124);
const valor2 = whatsType<number[]>([1,2,3,4,5]);

console.log(valor.toUpperCase());
console.log(valor1.toFixed());
console.log(valor2.join('-'));


