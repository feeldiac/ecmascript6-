/*Importaciones individuales 
1.
import {upperCaseFn} from './functions.js'
const hello = upperCaseFn('Buenos días familia');
console.log(hello);

2.
import { TAX1, TAX2, TAX3 } from './functions.js';
console.log(`Hay tres tipos de impuestos: ${TAX1}, ${TAX2}, ${TAX3}`);
*/


/*Importar todo como un alias.
- Se debe referenciar al objeto alias (como si fueran propiedades)
*/
import * as all from './functions.js'
const hello = all.upperCaseFn('Buenos días familia');
console.log(hello);
console.log(`Hay tres tipos de impuestos: ${all.TAX1}, ${all.TAX2}, ${all.TAX3}`);
