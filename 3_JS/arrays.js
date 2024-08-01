// colections of same items eg -followers of insta are storead in arrays

// *******DECLARATION OF ARRAYS*****


/*
let students = ["aman" , "ali" , "saif"]; //array  that contains similar type of data
console.log(students); // [ 'aman', 'ali', 'saif' ]
console.log(students[0]); // aman
console.log(students[-1]); //undefined 
console.log(students[15]); //undefined
console.log(students.length); //3

let stuInfo = ["ali" , "male" , 20]; // arrays cans tore different type of values.

// ***** ACCESESSING ARAY WITH STRING NOT WITH NUMBER
console.log(stuInfo['1']); //male reason--> stuInfo['1'] is "male" because JavaScript converts the string '1' to the numeric index 1.
*/

// **** ARRAYS ARE MUTBLE *******

let fruits = ["mango" , "apple" , "pear"];
fruits[0] = "banana";
console.log(fruits); // [ 'banana', 'apple', 'pear' ] value is change beacuse arrays create shallo copies i.e. its stores the reference of the value not the copy

//  *****  MORE ON ARRAYS *********

console.log(typeof(fruits)); //object

// TO KNOW IF fruit is an array or not
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray("fruits")); // false




