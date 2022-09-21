const myList = ['chicken', 'beans', 'tomatoes', 'water', 'banana', 'meat '];
const myList2 = _.chunk(myList, 3);
console.log(myList2);

console.log(_.clamp(2, 3, 5));
console.log(_.clamp(2, -2, -5));

console.log(_.inRange(12, 10));

var info = {
	Name: 'PAUL SEMPIJJA',
	password: 'gfg@1234',
	username: 'spaul',
};

// Use of _.defaultsDeep() method
console.log(_.defaultsDeep(info, _.defaults(info, { id: 'Id97' })));

// Original array to be concatenated
let array1 = [1, 2, 3];
 
// Values to be added to original array
let values1 = [0, 5, "a", "b"]
 
let newArray1 = _.concat(array1, values1);
console.log("Before concat: " + array1);
 
// Printing newArray
console.log("After concat: " + newArray1);
