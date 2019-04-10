/* Task from Codeacademy JS course 
  Training the use of variables by creating degrees converter
  */

// constant variable for kelvin
const kelvin = 450;
// constant variable for celsius
const celsius = kelvin - 273;
// calculating fahrenheit (to be changed)
let fahrenheit = celsius * (9/5) + 32;
// rounding decimal to integer
fahrenheit = Math.floor(fahrenheit); 
// calculating newton (rounded)
const newton = Math.floor(celsius * (33/100));

// printing results
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton. `);
