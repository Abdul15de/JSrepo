// ***** OPERATORS ******

// ******  ==   AND  === ********


/*
console.log(5 == '5'); // true becoz == only checks value not dtattype
console.log(5 === '5'); // false === checks value and datatype also

console.log(null == undefined);// true becoz both are considered as empty **** == has irregular answers
*/


// **Special Case for null and undefined: According to the ECMAScript specification, when comparing null and undefined with the == operator, they are considered equal. This is a special case built into the language.***from chat gpt

/*
console.log(1 + true);//
console.log(null == 0); // null ko conversion ke time par 0 le liya jata hai but conparisiin ke time ye zero nhi hai same reason for below also.
console.log(null == false); // fa;se
console.log(false == null); //false
console.log(undefined == false); //false
*/


// ******  COMPARISION ON NON-NUMBERS  ********

/*
console.log('abc' >= 'acd');
console.log('Abdullah' > 'Siddqui');
console.log('Gorakhpur' > 'Shahpur');
console.log('cba' > 'abc');
console.log('acb' > 'acx');
console.log('acx' > 'acb');
*/    


// ***special cases
/*
console.log("" == " ");//false
console.log(null == undefined);// true
*/

// *******  TRUTHY AND FALSY VALUE *******
//EVERYTHIG IN JS IS EITHER TURE OR FALSE(IN BOOLEAN CONTEXT)

// THESE ARE HAVINS FALSE VALUES

/*
console.log(Boolean("")); //false
console.log(Boolean(0)); //false
console.log(Boolean(-0)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false


// NOW ANYTHING ELSE THEN THE ABOE ARE HAVIN TRUE VALUES
console.log(Boolean("abs"));
console.log(Boolean(" "));
console.log(Boolean(124));

console.log(Boolean(-345));


*/
