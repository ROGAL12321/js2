import { v4 as uuidv4 } from 'uuid'
import helloWorld from './utils'

console.log(helloWorld());

// import hello, { sum, diff } from './utils';
// sposob na zaimportowanie pod jakas nazwa wszystkich funkcji
// import * as functions from './utils'

// console.log(functions.sum(2,2))

console.log(uuidv4());

console.log(sum(2,2));
console.log(diff(2,2));