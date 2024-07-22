// ********   CONVERSIONS IN JAVASCRIPT   *************

// conversion of string(Which is number(e.g "12" is a srting but 12 is number)) to  a number

/*
let str = "20";
console.log(str); // 20
console.log(typeof(str)); //string

let valueInNumber = Number(str);//to convert in  number
console.log(valueInNumber); // 20
console.log(typeof(valueInNumber)); //number
*/

// conversion of string(Which is not a number(e.g "12abc" is a srting but 12abc is not a number)) to  a number

/*
let str = "123abc";
console.log(str);
console.log(typeof(str));


let valueInNumber = Number(str);//to convert in  number
console.log(valueInNumber); // NaN
console.log(typeof(valueInNumber)); //number

*/


// ******* CONVERTING SPACE AND EMPTY TO A NUMBER

/*
let empty = "", space = " ";
console.log(empty);
console.log(typeof(empty));// string
console.log(space);
console.log(typeof(space)); //string

let emptyToNumber = Number(empty);
console.log(emptyToNumber); // 0
console.log(typeof(emptyToNumber)); //NUMBER 

let spaceToNumber = Number(space);
console.log(spaceToNumber);//0
console.log(typeof(spaceToNumber)); // number 
*/

// ********** CONVERTING NULL TO A NUMBER  ***********

/*
let nul = null;
console.log(nul); // null
console.log(typeof(nul)); //object 

let nullToNumber = Number(nul); 
console.log(nullToNumber); // 0
console.log(typeof(nullToNumber)); //number
*/

// *********** condverting undefined to a number *****

/*
let undef = undefined;
console.log(undef); //undfined
console.log(typeof(undef)); //unefined
console.log(Number(undef)); //NaN
console.log(typeof(Number(undef))); //number
*/

// *****  USE OF UNARY OPERATOR ("+") TO CONVERT VARIABLE TO ANUMBER

/*
let x = "5";
let y = + x;
console.log(x,y,"type of y=>",typeof(y)," and type of x=>",typeof(x));

let n = null;
let n0 = + n;
console.log("n=>",n,"n0=>",n0,"Type of n=>",typeof(n),"   Type of n0=>",typeof(n0));

// so instead of writing Number() we can use + operator ***reference w3schools 
*/

// ******  CONVERTING NUMBER TO STRING ******


/*
let num = 123;
let numToString = String(num);
console.log(`number = ${num} number after converting to String = ${numToString} and type after conversion is ${typeof(numToString)}`);



*/


//  ****  CONVERTING NULL TO STRING ******

/*
let nul = null;
let nulToString = String(nul);
console.log(nulToString); // null(but is string)
console.log(typeof(nulToString)); //string
*/

// **********  CONVERSION FROM  UNDEFINED TO STRING ****

/*
let undef = undefined;
let undefToString = String(undef);
console.log(undefToString); // undefined
console.log(typeof(undefToSrting));  //undefined
*/



// ****NOTE- SEE CONVERSIONS TABLE IN THE W3SCHOOLS
