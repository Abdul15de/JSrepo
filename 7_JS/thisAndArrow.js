// this keyword


// ******** USE OF THIS IN OBJECT METHOD

/*
// if this is not used
const stu = 
{
    name: "abc",
    class: 12,
    eng: 80,
    maths: 30,
    phy: 60,
    avgOfMarks()
    {
        console.log((maths + eng + phy) / 3); // error: maths is not defined and same with eng and phy also so this is used
    }
}

stu.avgOfMarks();
*/

// when this is used then no error occcurs

/*
const stu = 
{
    name: "abc",
    class: 12,
    eng: 80,
    maths: 30,
    phy: 60,
    avgOfMarks()
    {
        console.log((this.maths + this.eng + this.phy)/3); // 56.666 no error becoz this is used for first time
        // for second time when eng = 90 average changeas to 60 becoz this refers to current object and object currently has eng = 80//

        console.log(this);  // output --
        // {
        //     name: 'abc',
        //     class: 12,
        //     eng: 80,
        //     maths: 30,
        //     phy: 60,
        //     avgOfMarks: [Function: avgOfMarks]
        //   }

    }
}
stu.avgOfMarks(); 

// after changing value
// stu.eng = 90;
// stu.avgOfMarks();
// here this refers to current object

console.log(this); // {} here output is empty object but in brwoser's console the output is window or somthing like that...
// window is global object in browser and we make use of the methods(like alert, prompt etc) of window in javascript code to run our code  
*/

// ********* ARROW FUNCTIONS ***********
// compact logic of defining functions

/*
// when no arguments are passed
const greet = () => 
{
    console.log("Hello"); // Hello
}
greet();

// when there is 1 argument
const cube = n => 
{
    console.log(n * n * n);
}
cube(3); // 27
// (n) can also be used but when there is only 1 argument then no need of brakets


// when there are two or more arguments
const sum = (a, b) => 
{
    console.log(a + b);
}
sum(1, 2); // 3
console.log(typeof sum); //function
*/


//  ***** IMPLICIT FUNCTION *****
// Implicit function implicit means automatic or pahle se understood hai 
// implicit function is used when the function olny returns a value and nothing else 
// as a result we get more compact function

/*
const mul = (a, b) => (a*b);
// can aslo be written as const mul = (a, b) => (a*b); but in case of returning objects () these brakets are must 
// can also be writen as
// const mul = (a, b) => 
// (
//     a*b
// )

console.log(mul(3, 2)); // 6
*/

//***** thiso(KEYWORD) with Arrow function
// this used in arrow function has lexical scope taken from parent

/*
const stu =
{
    name: "Ali",
    marks: 90,
    getName: function ()
    {
        console.log(this); 
        // { output
//   name: 'Ali',
//   marks: 90,
//   getName: [Function: getName],
//   getMarks: [Function: getMarks]
    // }

        return this.name; 
    },
    getMarks: () => 
    {
        
        console.log(this); // {} here is window means paernt's(stu object) scope  ****not clear 
        return this.marks; // undefined becoz this.marks is not defined in window object it is defined in stu object
    }
};

console.log(stu.getName()); // Ali becoz this.name returns Ali
console.log(stu.getMarks()); // undefined becoz this.marks doesnot refers to current object.

*/



// **** callback function ****read documentation from W3Schools


// Functions running in parallel with other functions are called asynchronous
// A good example is JavaScript setTimeout()
//  ***** SET TIMEOUT  *****

/*
setTimeout( () =>
{
    console.log("hello");
}, 2000); // here 2000 means after 2000ms(2s) "Hello" will print
*/



// SEt INTERVAL TO SET TIME OF PRINTING
// const greet = () => 
// {
//     console.log("bye bye");
// }
// let id = setInterval( greet , 3000);

// console.log(id); // 1 becoz it gets id 1
// // to stop it id is used write clearInterval(id) here clearInterval(1); to stop setInterval( greet , 3000);

// to print hello World for 5 times only (** not indefinite times) after every 2 sec

//to print hello world 5 times 
let id = setInterval( () => 
{
    console.log("hello World");
}, 2000); 

setTimeout( () => 
    {
        clearInterval(id);
    }, 11000) // here 11000 means 5 * 2000 becoz 5 baar print karega to us time 10000s hi hoga or usi time stop karna hai to usi time stop kardega isliye 4 baar print karega but 11000  karne se jab 5vi baar print kar dega uske ek sec baad print kar dega
    
     


