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




const calcAverage = (data1, data2, data3) => {

    return (data1 + data2 + data3)/3;
};

const scoreDolphins = function (data1, data2, data3){
  const average = calcAverage(data1, data2, data3);
  return average;
}

console.log(scoreDolphins(4,5,6));


//introduction array

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michale', 'Steven','Peter'];
console.log(friends);

//const years = new Array(1991, 1984, 2009, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);


friends[2] = 'Jat';

console.log(friends);



const firstName = 'Jonas';
const jonas = [firstName, 'Salazar', 2037 - 1991, 'teacher', friends];

console.log(jonas);

//exercise

const calAge = function (birthYear){
    return 2037 -birthYear;
}


const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[years.length - 1]);

console.log(age1, age2, age3);


const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length -1])];

console.log(ages);



//add element
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);



//remove element
friends.pop(); // last

const popped = friends.pop();
console.log(popped);
console.log(friends);


friends.shift(); // first
console.log(friends);


console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes())

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Peter');
}


//new form
const calctip = function(bill){
    return bill >=50 && bill<=300 ? bill * 0.15 : bill * 0.2;
}




let tip;
const bills = [125, 555, 44]
function calcTip(bill) {
    

    if (bill >= 50 && bill<=300){
        let tip = bill * 0.15;
        return tip
    } else{
        let tip = bill * 0.20;
        return tip
    };

}

console.log(calcTip(100));
const total = [bills[0] + calcTip(bills[0]),bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];





const jonasArray = [
    'jonas',
    'Salazar',
    2037-1991,
    'teacher',
    ['michael', 'peter', 'steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Salazar',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const namekey = 'Name';

console.log(jonas['first' + namekey]);
console.log(jonas['last' + namekey]);

// console.log(jonas[])

const interestIn = prompt('What do you want to know about Jonas? choose between firstname, lastname,age, job and friends');
console.log(jonas[interestIn]);

if (jonas[interestIn]){
    console.log(jonas[interestIn]);
} else{
    console.log('Wrong request');
}

jonas.location = 'Portugal';

jonas['twitter'] = '@jonmasemil'
console.log(jonas);



// Challaenge

console.log(`${jonas['firstName']} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]} `);

*/

//objet methods


const jonas = {
    firstName: 'Jonas',
    lastName: 'Salazar',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    

    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} -years old ${jonas.job}, and he has ${this.hasDriversLicense}`;
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log('hola');

//challange


console.log(jonas.getSummary());