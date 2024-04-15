

interface Passenger{
    name: string,
    children?: string[]
}

const pasajero1: Passenger ={
    name:'Miguel'
}
const pasajero2: Passenger ={
    name:'Sadith',
    children: ['Carlos','Abdiel']
}

const returnNumberChildren = (passenger: Passenger) :number => {
    
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name , howManyChildren);
    
    return howManyChildren;
}

returnNumberChildren(pasajero2);