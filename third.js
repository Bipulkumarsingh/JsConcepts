var collection = {
    "name": "bksingh"
}
// create a copy of object 
var collectionCopy = JSON.parse(JSON.stringify(collection));
// if collection have name property then assign itself or if not then create property and assign bksingh to it.
collection['name'] = collection['name'] || 'bksingh';
// while loop
var myArray = [];
var i = 0;
while(i < 5){
    myArray.push(i)
    i++;
}	
console.log(myArray)
// Iterate with for loop 
var ourArray = [];
for (var i = 0; i < 5; i++){
    ourArray.push(i);
}
console.log(ourArray)
console.log(ourArray.length)

// Do While loop 

var thisArray = [];
var i = 10;
do {
    thisArray.push(i);
    i++;
} while ( i < 5)
// Math.random generate number between zero and one but not one
console.log(Math.random());
// random whole number
console.log(Math.floor(Math.random() * 20)) // floor is used to round off the value 

// Ternary operator
function checkEqual(a, b){
    return a === b ? true : false;
}
checkEqual(2,3)

// Difference between var and let
/*
if we declare variable with var keyword two times in same program then compilar donot give error, it allow to declare duplicate variable
    if we try to declare duplicate variable with let , it will not allow to redeclare duplicate variable.
var is global scope and let is local and also block scope means , if we define "let a" inside if statement,
we can't access it outside if statement.
*/
const s = [5,7,2]
// we can replace this array with new one but we can update it with bracket notation
s[0]= 7
s[1]= 3
s[2]= 1