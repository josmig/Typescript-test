
export interface Product{
    description: string,
    price: number
}

export interface TaxtCalculationOptions{
    tax: number;
    products: Product[]
}


const phone: Product ={
    description: 'Nokia',
    price: 1500
}

const table: Product ={
    description: 'IPad',
    price: 5000
}


// function taxtCalculation( options:TaxtCalculationOptions ): [number,number]{
// function taxtCalculation( {tax,products}:TaxtCalculationOptions ): [number,number]{
export function taxtCalculation( options:TaxtCalculationOptions ): [number,number]{

    const {tax, products} = options;

    let total =0;
    products.forEach(({price}) => {
        total += price;
    });

    return [total, total*tax]
}
const shoppinCart = [phone,table];
const tax=0.15;

const [total, taxTotal] = taxtCalculation({
    products : shoppinCart,
    tax: tax                   
})



console.log('total: ', total);
console.log('tax : ', taxTotal);


