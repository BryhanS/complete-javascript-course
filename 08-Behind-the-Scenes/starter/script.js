'use strict';

function calAge(birthYear){
    const age = 2031 - birthYear;

    function printAge(){
        let output = `You are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            // creatubg New variable with same name as outer scope's variable
            const firstName = 'Steven'

            //reassingnin outer scope's variable
            output = 'NEW OUTPUT'

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str)

            function add(a,b){
                return a + b;
            }


        }

        // console.log(str);
        console.log(millenial);
        // add(2,3);
        console.log(output);
    }

    printAge();
    return age;
}

const firstName = 'Jonas';
calAge(1991);
// console.log(age);
// printAge();