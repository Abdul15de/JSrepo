//  *******  MATHS OBJECTS  **********

/*
JavaScript Math Methods
Method	Description
abs(x)	Returns the absolute value of x
acos(x)	Returns the arccosine of x, in radians
acosh(x)	Returns the hyperbolic arccosine of x
asin(x)	Returns the arcsine of x, in radians
asinh(x)	Returns the hyperbolic arcsine of x
atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
atanh(x)	Returns the hyperbolic arctangent of x
cbrt(x)	Returns the cubic root of x
ceil(x)	Returns x, rounded upwards to the nearest integer
cos(x)	Returns the cosine of x (x is in radians)
cosh(x)	Returns the hyperbolic cosine of x
exp(x)	Returns the value of Ex
floor(x)	Returns x, rounded downwards to the nearest integer
log(x)	Returns the natural logarithm (base E) of x
max(x, y, z, ..., n)	Returns the number with the highest value
min(x, y, z, ..., n)	Returns the number with the lowest value
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
sign(x)	Returns if x is negative, null or positive (-1, 0, 1)
sin(x)	Returns the sine of x (x is in radians)
sinh(x)	Returns the hyperbolic sine of x
sqrt(x)	Returns the square root of x
tan(x)	Returns the tangent of an angle
tanh(x)	Returns the hyperbolic tangent of a number
trunc(x)	Returns the integer part of a number (x)
*/ // from w3shools
// not so important so only studied it.


// ****   TO GENERATE RANDOM INTEGERS   *******

// math.random generates number between 0 to 1(exclusive) and if we want no. between 1 to 10 then following steps are required


/*
let step1 = Math.random(); // gives a no.
let step2 = step1 * 10; // can mul with 100 for number between 1 to 99 and * 5for number between 1 to 4
let step3 = Math.floor(step2);
let step4 = step3 + 1; // this is done bcoz random gives number exclusive of 1 so to include 1 v do + 1 
// *** my logic insted of doing math.floor and then addign 1 we can do Math.ceil also
console.log(step4); // 2
*/



// combining them

/*
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));

*/






