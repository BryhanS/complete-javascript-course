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


//funtion declaretion and expressions

//funtion declarition
function calAngel(birthYear){
    return 2037 - birthYear;
}

const age1 = calAngel(1991);

//funtion expresion


const calAge2 = function(birthYear){
    return 2037 - birthYear
}

const age2 = calAge2(1991);

console.log(age1, age2)


const calAge2 = function(birthYear){
    return 2037 - birthYear
}


//arrow function

const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);



const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Diego'));
console.log(yearsUntilRetirement(1980, 'Bob'));


//funtion calling other function
function cutFruitPieces(fruit){
    return fruit * 4;
}


function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));

*/

//review function
const calAge = function (birthYear){
    return 2037 - birthYear;
}


const yearsUntilRetirement = function (birthYear, firstName){
    const age = calAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} has alredy retired`);
        return -1;
    }

    return retirement;
    //return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'jonas'));
console.log(yearsUntilRetirement(1950, 'mike'));
