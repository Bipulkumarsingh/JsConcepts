// Arrow function
const magic = () => new Date();
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));
// args in function 
// this is called rest operator 
function sumValue(...args){
    return args.reduce((a, b) => a+ b, 0);
}
sumValue(1,3,4,5)
//spread operator is just opposite of rest, it will spread array into seprate values.
const arr1= ['JAN','feb','march']
var arr2
arr2=[...arr1] //dividing array1 into single elements and then putting values to array2
const [z,x,,y] = [1,2,3,4,5];
console.log(z,x,y) // assign value to multiple variable at same time.
let a = 8, b = 6;
[a,b] = [b,a]

// Use Destructuring Assignment with the rest operator
const source = [1,2,3,4,5,6,7,8,9,10]
function removeFirstTwo(list){
    const[, ,...arr] = list; // this will leave first two value of source and then assign all values.

    return arr;
}
const arr = removeFirstTwo(source)
console.log(arr);
console.log(source);
//carete string with template literal
const person = {
    name: "Bipul singh",
    age: 28
}
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`
console.log(greeting)
