/**
 * 
 * 1. Importa la tua funzione da names.js
 * 2. Importa la tua funzione da hobbies.js
 * 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà:
 * fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
 * 
 */

const createObj = require('./names.js');
const createArray = require('./hobbies.js');

function userData() {
  const { firstName, lastName } = createObj('Valerio', 'Quintilio');
  const hobbies = createArray('Cooding', 'Giochi', 'Palestra');

  return { fullName: `${firstName} ${lastName}`, hobbies }
};

console.log(userData());