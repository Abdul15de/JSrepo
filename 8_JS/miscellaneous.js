// for each methods
// arr.forEach(func);
// foreach method runs the function(func) again and again for each element in the array

/*
let arr = [1, 2, 3, 4, 5];
function print(element)
{
    console.log(element); //1 2 3 4 5 (prints in separate line)
}

arr.forEach(print); // now here after calling print(****it will be written as function name no () will be used) in forEach the argument in print i.e. element refers to every element of array one by one print() runs five times because arr has five elements

// *** question arises that why only print is written instead of print(element) in line 11 while calling
// *** here is the answer => In JavaScript, when you pass a function as an argument (such as print in arr.forEach(print)), you're passing the function itself, not calling it immediately. The forEach method will automatically call the passed function with each element of the array.
*/

// *** only for checking that can for each be used for objects also and the answer is no
/*
const obj =
{
    name: "Ali",
    marks: 50
};

function print(e)
{
    console.log(e); 
}
obj.forEach(print); // error because for Each cannot be use for objects **** it is only for checking
*/

// *** for each with array of objects *** is easy so skipped


// ****** MAP ******

// for each does not return any value (either return is written or not)
 //example

// let arr = [1, 2, 3, 4, 5];
// function print(element)
// {
    
//     console.log(element); //1 2 3 4 5 (prints in separate line)
//     return 5;
// }

// let value = arr.forEach(print);
// console.log(value); // undefined even though 5 is given 

// so from above forEach does not return any value for this we use map

// map is similar to forEach but only return is used

/*
const coding = ["js", "ruby", "java", "python", "cpp"];

let values = coding.forEach( (item) => {
  console.log(item); //  output => 
// js
//   ruby
//   java
//   python
//   cpp
} );
 */

// question(confusion)*** why does values first prints all elements then prints undefined it should print  undefined only because first the arrow functon(item) is called after writing let values = coding.forEach( (item) => {
//   console.log(item); }

/*
let v = function r() // named function expression
{
    for(let i=0; i<=3; i++)
    {
        console.log("1111");
    }
    return 50;
}

console.log(v()); // named function expression, so v() is used instead of r to call r() v will always be used
*/

//  *** map =>

/*
const number = [1, 2, 3, 4, 5, 6, 7];
 
let newNum = number.map( (num) => ( num + 10 ) );
// newNUM will be array of numbers 
console.log(newNum);  //  [11, 12, 13, 14, 15, 16, 17] 
*/



// **** map with objects ** very easy so skipped

// **** condition in map 

/*
const number = [1, 2, 3, 4, 5, 6, 7];
let newNum = number.map((num) => (num > 4));
console.log(newNum);  // the output is [false, false, false, false, true,  true, true]
*/


// to get number [5, 6, 7] using map
/*
const number = [1, 2, 3, 4, 5, 6, 7];
let newNum = number.map( 
    function greater(num) 
{ 
    if( num > 4 )
    {
        return num;
    } 
}); 
// newNUM will be array of numbers 
console.log(newNum); //[ undefined, undefined, undefined, undefined, 5, 6, 7 ]
*/

// the output is [ undefined, undefined, undefined, undefined, 5, 6, 7 ] instead of  [5, 6, 7] so we use filter instead of that to get number



//  *****  FILTER  *****

/*
const number = [1, 2, 3, 4, 5, 6, 7];
 
let newNum = number.filter( (num) => ( num > 4 ) ); 
console.log(newNum); [ 5, 6, 7 ]
*/


//  *** chaining ****

const number = [1, 2, 3, 4, 5, 6, 7];

const newNum = number
.map((num) => (num * 10))
.map((num) => (num + 10))
.filter((num) => (num >= 50))

// chaining me first wale map((num) => (num * 10)) ki return value( i.e. [10, 20, 30, 40, 50, 60, 70]) second wale map((num) => (num + 10)) me jayegi that will return  [20, 30, 40, 50, 60, 70, 80]) and the return values goes to filter then finally the output is [50, 60, 70, 80]

console.log(newNum); // [ 50, 60, 70, 80 ]

