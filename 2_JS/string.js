// *** METHODS OF STRINGS ******
// **** In JS Strings are immutable because when methods applied to it then the method forms new srting and the original string does not channges"   e.g -- TRIM - removes whitespaces and produces new string but does not changes the originl string str

// let str =("    Abdu ll  ah       ");
// console.log(str.trim());// (Abdu ll  ah) removes only white spa\ces after the string


let word = "Hello World";

// 1-  ********  The at(position) Method/

/*
console.log(word.at(0)); //H
console.log(word.at(11)); //undefined
console.log(word.at(-1)); //d here -1 means length-1 i.e 11-1=10 so at index 10 there was d hence d was output
console.log(word.at(-3));//r
console.log(word.at(-5));//W
console.log(word.at());//H it prints only the first letter when nothing is provided because it will defaultly take 0
console.log(word.at(-30)); // undefined 
*/


//  2- **********  chatAt  ********

/*
console.log(word.charAt(0));
console.log(word.charAt(11)); // This wll give an empty srting becoz there are only 10 characters
console.log(word.indexOf(word.charAt(-1)));// This wll give an empty srting

/* reason for that ----
console.log(word.indexOf(word.charAt(-1)));
 in JavaScript, it involves two parts:

word.charAt(-1): The charAt method in JavaScript doesn't handle negative indices; it will return an empty string for any negative index.

word.indexOf(""): The indexOf method will return 0 when searching for an empty string because an empty string is found at the start of any string.



console.log(word.charAt(-3)); // This wll give an empty srting becoz chatAt does not take 1 value like ****at 
console.log(word.charAt(-5)); //empty string
console.log(word.charAt()); //H it prints only the first letter when nothing is provided because it will defaultly take 0

*/



//  ****  difference between charAT and at 
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2).


// ****** 3- charCodeAt()  ***********
//  The charCodeAt() method returns the ASCII code of the character at a specified index in a string


/*
console.log(word.charCodeAt(0));// 72 because at 0 there is H and its ASCIII value is 72
console.log(word.charCodeAt(3)); // 108
console.log(word.charCodeAt()); // 72
console.log(word.charCodeAt(-1)); // NaN
console.log(word.charCodeAt(11)); //NaN

*/



// ******** reason for both NaN in abobe output   *****
/*
The charCodeAt method in JavaScript returns the Unicode code unit of the character at the specified index. Here's what happens with the provided code:
1.
console.log(word.charCodeAt(-1));

The charCodeAt method does not handle negative indices and will return NaN (Not-a-Number) for an invalid index. So this will output NaN.


2.
console.log(word.charCodeAt(11));

The charCodeAt method will return the Unicode code unit of the character at index 11. Since the string "hello World" has only 11 characters (index 0 to 10), index 11 is out of bounds, and this will also output NaN.
*/

//    ********* 4-- slice methods ******** 


/*
//The method takes 2 parameters: start position, and end position (end not included).
console.log(word.slice(6 , 11)); // World
console.log(word.slice(3)); // (lo World)becoz when end is not given it takes upto the lenght(last index)
console.log(word.slice()); // hello  World
console.log(word.slice(-3))// it means like at() here -3 means length(11)-3 i.e 8 means the uotput will be "rld"
*/


// *****   5-- Similarly substr and substring *** seee n w3 schools

/*
//substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().

// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
*/


// ********   6-- repeat
/*
let text = "Hello world!";
console.log(text.repeat(2)); // Hello world!Hello world!
*/

// *** note *** check other methods from W3schools

// *** below are only for testing purpose after reading from w3Schools

//  *** for padStart * ** *

/*
let text = "abdul";
console.log(text.padStart(4 , "1"));
// The code you provided uses the padStart method to pad the string "abdul" with "1" characters until it reaches a length of 4. Since "abdul" is already longer than 4 characters, the padStart method has no effect on it.

console.log(text.padStart(10 , "1")); // 11111abdul
console.log(text.padEnd(10 , "1")); // abdul11111
console.log(text.padStart(10 , String(1))); // 11111abdul -> 1 convertd to "1"
*/

// *****  for repalce() The replace() method replaces a specified value with another value in a string 
 // there are many method but it takes lot of time so study from documentation(W3Schools);
 
let a = 0;
console.log(a);













