

const skills: string[] = ['Bash','Counter','Healing',''];

interface Prueba{
    name:string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const prueba: Prueba ={
    name: 'Pantigoso',
    hp: 500,
    skills: ['Fuego','Hielo']
}

prueba.hometown ='Juliaca';

console.table(prueba);

export{};
