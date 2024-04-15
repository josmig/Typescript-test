
import { Product,TaxtCalculationOptions, taxtCalculation} from './06-Destructuracion_argumentos';


const shoppingCart : Product[] = [
    {
        description: 'Phone',
        price:150
    },
    {
        description: 'iPad',
        price:5000
    }
];

const[tax, total] = taxtCalculation({
    products: shoppingCart,
    tax:0.15
});

console.log({total,tax});
