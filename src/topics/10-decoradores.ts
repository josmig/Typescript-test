

function classDecorator<T extends { new (...args:any[]): {}}>(
    constructor: T
) {
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'Overwide';
    }
}

@classDecorator
class superClass{
    
    public  myProperty: string = 'Abc123';
    
    print(){
        console.log('Hola mundo');
        
    }
}

console.log(superClass); //la clase

const myClass = new superClass();
console.log(myClass);

