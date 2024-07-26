// datatype is used to handle different types of data

//7 tyoes of datatypes
// a = 25;

/* ******* Testing the type of some random values

// console.log(typeof(a)); // number
// console.log(typeof("abdull"));//string

// console.log(typeof(0.5));//number
// console.log(typeof("0.6"));//string
// console.log(typeof('a'));//string
// console.log(typeof("a"));//string
// console.log(typeof('ass'));//string
// console.log(typeof(null));//object**interview question
// console.log(typeof(true));//boolean
// console.log(typeof(abdul));// undefined
   
// console.log(typeof(yes));// undefined
// console.log(typeof(dfg));// undefined

*/

/*  ***** NUMBERS *******/
// ANY +VE OR -VE Or any floating point number(decimal number) comes under number data type 



//    **** NaN- Not a Number *******



/*
console.log(0/0); // NaN
console.log(typeof(NaN)); //number
// ********** so NaN is a number type that represents a invalid number e.g 0/0 is infinte so it represents a invalid number
//  similarly operations on NaN ia also NaN
// like --
// 5*NaN--NaN
// 5+NaN -- NaN
// 5/NaN -- NaN 


*/


// ******* STRING  **********

// let name = "abdullah";
// console.log(name);//abdullah

// let newName = 'abdullah siddqui';
// console.log(newName); //abdullah siddqui

//so both way "" and '' can be used for values of string


// ******   RULES RELATED TO THE STRINGS


// let name;
// name = "My name is 'abdullah'";//possible
// console.log(name);//My name is 'abdullah' 
// name = 'My name is "abdullah"'; // possible
// console.log(name); // 'My name is "abdullah"'

// but below codes are not possible

/*
name = 'My name is 'abdullah'';// not possible
console.log(name);//  no output beause above line has erroe 
name = "My name is "abdullah""; // not possible
console.log(name); // no output beause above line has error
*/


// *****   INDICES IN STRING   *******
// String follows zero based indexing for each character in the string


// ****** tricky questions relatd to srting
// let name = "";
// console.log(typeof(name));//string
// console.log(name.length);// 0 becoz there is no string

// *****   UNDEFINED    *******
// let a;
// console.log(a); // undefined
// console.log(typeof(undefined)); // undefined

// let name = "ABDULLAH";
// console.log(name[0]); //A
// console.log(name[1000]); // undefined

// *****  NULL ********
// represents intentional absence of  any object value
let num = null;
console.group(num);//null
console.log(typeof(num));//object
console.log(typeof(null));//object











