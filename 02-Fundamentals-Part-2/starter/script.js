'use strict';

/*
let hadDriversLicense = false;
const passTest = true;

if (passTest) hadDriversLicense  = true;

if(hadDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 23;
*/
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
