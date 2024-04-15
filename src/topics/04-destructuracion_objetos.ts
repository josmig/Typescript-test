//destructuracion

interface Cancion {
    song: string;
    duration: number;
    volumen: number; 
    details: Details;
}
interface Details{
    autor: string;
    anio: number;
}

const audio: Cancion = {
    song: 'Te amare',
    duration: 5,
    volumen: 90,
    details:{
        autor: 'Marc Anthony',
        anio: 2014
    }
        
}

//Destructurando eliges el campo  y le asignas otro valor como variable pára ser mas agiles en el desarrollo
const {
        song: anotherSong , 
        volumen:vol ,
        details
    } = audio;

// const {
//         song: anotherSong , 
//         volumen:vol ,
//         details: {
//             autor:actor,
//             anio: anioo
//         }
    
//     } = audio;    

const {autor: actor} = details;
// console.log(song);
// console.log('Song : ', anotherSong);
// console.log(volumen);
console.log(`La cancion es ${anotherSong}, y la duración es ${vol} min`);
console.log({anotherSong,vol,actor});
// console.log(actor , anioo);


//Para evitarse todo esto 
console.log(audio.song , audio.details.autor);



// console.log(anotherSong);





export{};