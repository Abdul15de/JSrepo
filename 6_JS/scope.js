// Scope  determines the accessibility if variables, objects and function from different parts of code
// types function scope, block scope, lexical scope and global scope

//  **********  FUNCTION SCOPE ********
// variables created inside a function cannot be accessible outside the function

/*
let n1 = 30;
let n2 = 40;
//n1, n2 has global scope
// n1, n2 can be used any where in the code and either any other block
function numbers()
{
    let n1 = 2;
    let n2 = 3;
    // n1, n2 here are function scoped variables
     
    console.log("n1 = "+n1+" and n2 = "+n2); // n1 = 30 and n2 = 40
    // ****here global scope wala n1 and n2 bhi print ho sakta tha but function me created varibles  n1 and n2 print hua becoz when there is fight between function and global scoped variable then function scoped variable wins becoz function scope is more specific(near) then global scoped variables. 
}
numbers();
console.log("n1 = "+n1+" and n2 = "+n2);
*/

//  ******  BLOCK SCOPE   *******

/*
{
    let a = 10;
    const b = 20;
    var c = 30;
}
console.log(a); // error 
console.log(b);// error
console.log(c); // 30
// c is printed but a and b are not because a and b are block scoped variables and c defined using var ahs gloal scope
*/

// ******  LEXiCAL SCOPE ******
// defines scope in case of nested loops and functions
// a varible defined in parent function and loops can be accessible inside all its child functions and loops 
//opposite is NOT  posssible


/*
function outerfun()
{
    let x = 10; 
    let y = 20;

    function innerfun()
    {
        let z = 30;
        console.log(x); //10
        console.log(y); //20
        console.log(z); //30
        

    }
    console.log(x); //10
    console.log(y); //20
    console.log(z); // error z has its scope within inner function

    //x, y are lexical scoped variables but z is a function scoped variable of innerfun()
    innerfun();
    return;

}


// console.log(innerfun()); // error becoz bina outer function ke inner function ko use nhikar sakte
console.log(outerfun()); 
*/

