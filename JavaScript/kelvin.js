const kelvin = 320;
console.log(kelvin); // kelvin weather

const celsius = (kelvin -273);
console.log(celsius); // celsius weather

const fahrenheit = (celsius * (9/5) + 32);
console.log(fahrenheit); // fahrenheit weather

const newFahrenheit = Math.floor(fahrenheit);
console.log(newFahrenheit); //floor number

console.log(`The temprature is ${newFahrenheit} degrees Fahrenheit.`)

const newton = Math.floor(celsius * (33/100));
console.log(newton);




