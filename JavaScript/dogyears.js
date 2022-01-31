//cuurent my age
const myAge = 37;

// early years
let earlyYears = 2;
earlyYears *=10.5;

// later years
let laterYears = myAge -2;
laterYears *=4;
console.log(earlyYears);
console.log(laterYears);

//together
let myAgeInDogYears = (earlyYears + laterYears);
console.log(myAgeInDogYears);

let myName = "SEMA".toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

