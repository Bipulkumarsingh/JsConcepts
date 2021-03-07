var number = 5; // in-line comment
/* 
This is a multiline comment
we can write anyting inbetween this.
*/
/*
Data Types:
undefined, null, boolean, string, symbol, number, and object
*/
// var is global variable and used througout program
var myName = "bipul"
myName = 8 // we can replace data with other datatype value

// let is also variable which is used within the scope
let ourName = "freecodecamp"

// const is static type which value never changes
const pi = 3.14

var a; //declare variable
var b = 2; // declaring and assigning in one line
a = 7 // assign value to variable now
b = a; // we can also assign variable value to different variable 
console.log(a)

// Use camelcase in python
var properCamelCase = "this is camelcase variable";
var sum = 10 + 10;
console.log(sum)
var difference = 45 - 33;
var product = 8*10
var division = 66 / 33; // quocent not reminder
var reminder = 66 % 33;
var myVar = 87;
//Increment number value
myVar++; // myVar = myVar + 1;
myVar--; // myVar = myVar - 1;
// Decial value or float
var decemialValue = 89.9;
// Escaping quotes
var myStr = "I am a \"double  quoted\" string inside double quotes.";
// Things we can escape out
/*
CODE OUTPUT
\' single qoute
\" double quote
\\ backslash
\n newline
\r carriage return 
\t tab
\b backspace
\f form feed  
*/

// concat sting with plus sign
var ourStr = "I come first. " + "I come second";
ourStr += "another line to add.";

// Length of sting 
var firstName = "bksingh";
firstNameLenght = firstName.length; 

// string slice 
var firstLetter = firstName[0]
// string are immutable, means we can alter sting once it is created 
var helloWorld = "Jello World"
// helloWorld[0] = 'H' // gives error
helloWorld = "Hello World!";  

// sift and pop in array 
myArray = ["first", "second", "third", "fourth"]
myArray.pop(); // it will pop the last element of the array
myArray.shift() // it will remove first element of the array
// unshift add element to the beginning of the array
myArray.unshift("first element")