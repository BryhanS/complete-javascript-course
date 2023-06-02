
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);


let firstName = "Mitalda";

console.log(firstName);
console.log(firstName);
console.log(firstName);


// Varible name convention
let myFirstJob = 'Coder';
let myCurrentJob = "Teacher";

let job1 = 'programmer';
let job2 = 'tecaher';

console.log(myFirstJob);
*/

/*

let  javascriptIsFun = true;
console.log(javascriptIsFun);


console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');


javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);


let year;

console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age= 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Salazar';
console.log(lastName);



//math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah /10, 2**3);


const firstName = 'Jonas';
const lastName = 'Pacsi';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x*= 4; //x = x *4 = 100
x ++;
x--;
x--;

console.log(x);


// comparison operators
console.log(ageJonas>ageSarah); //>, <,>=. <=
console.log(ageSarah >=18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. StoreMark'sandJohn'smassandheightinvariables
2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
versions)
3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.



// var massMarks = 78;
// var heightMarks = 1.69;
// var massJohn =92;
// var heightJohn = 1.95;

let massMarks = 95;
let heightMarks = 1.88;
let massJohn =85;
let heightJohn = 1.76;

const bmiJohn = massJohn / heightJohn **2;
const bmiMarks = massMarks / heightMarks **2;

const maxHigherBMI = bmiMarks> bmiJohn;

console.log(bmiJohn, bmiMarks, maxHigherBMI)


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!.';
console.log(jonas);

const jonasNew = `Just a regular string ...`

console.log(jonasNew)

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
Multiplr
lines`);


const age = 15;


if (age >= 18){
    console.log('Sarah can start driving licences 🥰');
} else {
    const yearsLeft = 18 -age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}


const birthYear = 2012;
let century;

if(birthYear <= 2000){
    century = 20;
} else{
    century = 21;
}

console.log(century);


Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.
Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.
Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉 GOOD LUCK 😀



let massMarks = 95;
let heightMarks = 1.88;
let massJohn =85;
let heightJohn = 1.76;

const bmiJohn = massJohn / heightJohn **2;
const bmiMarks = massMarks / heightMarks **2;

if (bmiMarks > bmiJohn){
    console.log(`Mark's BMI is higher than John's!`)
    console.log(`Mark's BMI (${bmiMarks}) is higher than John's (${bmiJohn})!`)
} else{
    console.log(`John's BMI is higher than John's!`)
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMarks})!`)

}



// type conversion
const inputYear = '1991';
console.log(Number(inputYear) , inputYear);
console.log(Number(inputYear) + 18);


console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));

// type coercion

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2')


let n = '1' + 1;
n = n -1;
console.log(n);


// 5 falsy value :0 ,' ', undefined, null  , NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;

if (money){
    console.log("Don't spende it all");
} else{
    console.log('You should get a job');
}

let height = 0;

if (height >= 0){
    console.log('YAY! height is defines');
} else{
    console.log('height is undefined');
}

*/

const age = '18';
if(age === 18) console.log('you just became an adult (strict');

if(age == 18) console.log('you just became an adult (loose)');

const favourite = Number(prompt("what's your favourite number?"));
console.log(typeof favourite);

if (favourite === 23){
    console.log('cool! 23 is an amazing number!');
} else if (favourite === 7){
    console.log('cool! 7 is a cool number!');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23?')