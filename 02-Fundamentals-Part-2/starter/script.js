'use strict';

/*
let hadDriversLicense = false;
const passTest = true;

if (passTest) hadDriversLicense  = true;

if(hadDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 23;

//funtion

function logger(){
    console.log('My name is jonas');
}
//calling // runing / invokung function
logger();
logger();
logger();
logger();

function fullProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fullProcessor(5, 0);
console.log(appleJuice);
console.log(fullProcessor(5, 0));


const appleOrangeJuice = fullProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');
num

*/

//funtion declaretion and expressions

//funtion declarition
function calAngel(birthYear){
    return 2037 - birthYear;
}

const age1 = calAngel(1991);

//funtion expresion
const age2 = calAge2(1991);


const calAge2 = function(birthYear){
    return 2037 - birthYear
}


console.log(age1, age2)
