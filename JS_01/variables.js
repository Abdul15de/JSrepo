/* varible is the name of a storage loation*/

// variable values can be changed

// declaring variables without llet var or const 
//it is possible but not a good practice
// a=10;
// name = "Abdullah"; //name(string) is stored in "" double braces


// ******use of let.var and const*******
//these are used for declaring the variables

// *******    LET   **********
// let t=10;
// value of let declared can be changed but cannot redeclared

// t=15; //cahanging value of t
// console.log(t); // 15 becoz value can be changed



// let t=30; // error 
// console.log(t); // no output due to error in above line because varible cannot be redeclared using let

// *****  CONST

 // error because no value(either same or different) can be reassigned to const variable
//  const num = 30;
// num = num + 1;//error
// num = 30; // error
// console.log(num); //error due to error in above lines 

// hence values of const varble can neither be changed with reassignmet nor be redeclared


//   ********VAR******* 
// same as let but difference is of scope 



// ******   console.log  **********

// console.log("hello"); // hello
// console.log("HELLO","WORLD"); // HELLO WORLD
// console.log("Hello"," ","World"); // Hello   World
// let num = 23;

// console.log("sum =",(num+2)); //sum = 25

//  FOR MULTIPLE OUTPUTS
// console.log("Hello",num,(2+num)); // Hello 23 25

// *******   TEMPLATE LITERALS  ********
// used to write collection of number and strings

let num1 = 5;
let num2 = 10;
let output = `The output is :${num1+num2}Rupees.` //notice the spaces 
console.log(output); // The output is :15Rupees.
console.log(typeof(output)); //string





