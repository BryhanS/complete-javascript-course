// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const measureKelvil = function () {
    const measurement = {
        type: 'temp',
        unit: 'celcius',
        // value: prompt("Degrees celsius:"),
        value: 10,
    };

    console.table(measurement);
    console.log(typeof measurement.value);
    const kelvin = measurement.value + 273;
    return kelvin;
};

console.log(measureKelvil());

const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = 0;
    let min = 0;

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        debugger;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);



Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

// 1) Understanding the problem
// what to print and array of data
// how to use a loop of varois string

// 2) Breaking up into sub-problems
// do a loop for array and days
// insert a loop in the same line

*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    printf += `... ${arr[i]}°C in ${i + 1} days `;
  }

  return str;
};

console.log(printForecast(data1));
