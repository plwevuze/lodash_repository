const _ = require('lodash');
// Original array to be concatenated
let array1 = [1, 2, 3];

// Values to be added to original array
let values1 = [0, 5, 'paul', 'lwevuze'];

let newArray1 = _.concat(array1, values1);
console.log('Before concat: ' + array1);

// Printing newArray
console.log('After concat: ' + newArray1);
