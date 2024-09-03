// block,chunk of code that performs some task and can be used again and again when needed
// console.log ,pop, push are example of functions

//  **** CREATING FUNCTION  **********

//  deaclarig function

/*
function hello()
{
    console.log("hello World");
}
hello(); // hello World
*/

//  *********** FUNCTIONS WIRH ARGUMENTS ********
//giving input to function

/*
function stuInfo(name, age)
{
    console.log(name+"'s age is "+age);
}
stuInfo("abdullah"); // abdullah's age is undefined
// 1 or more then 1 argument may be passed but it is not necessary to provide all values to it.age is not given and its value is u ndefined.

*/


// to return value

/*
function sum(a , b)
{
    return a + b;

}

console.log(sum(1 , 2)); //3
// sum of three numbers usinh two arguments using concept of call within call nested functuion call
console.log(sum(sum(1 , 2) , 3)); //6

*/


// **** RETURNING MORE THAN ONE VALUES ****

/*
function stuInfo(name , age , course , branch)
{
    return name , age , course , branch; // not possible like this because it only return last value i.e. branch
}
console.log(stuInfo("Abdullah Siddqui" , 24 , "btech" , "computer Science")); // computer science because it returns only last value when many variables are there then it only returns last value


// to return many > 1 values we use array or object
//  *****let check??

function stuInfo2(name , age , course , branch)
{
    return [name , age , course , branch];
}
console.log(stuInfo2("Abdullah Siddqui" , 24 , "btech" , "computer Science")); //[ 'Abdullah Siddqui', 24, 'btech', 'computer Science' ]

*/

// ***** WHEN NO.OF ARGUMENTS ARE UNKNOWN *****

/*
function displayNumbers(...numbers)
{
    return numbers;
}
console.log(displayNumbers(11, 2, 3, 4, 5, 6, 7, 8, 9)); // [11, 2, 3, 4, 5, 6, 7, 8, 9] 
// here ... is a rest operator(sometimes also called spread operator) it converts all the arguments to an array 
// ... is used when many arguments are there or when no. of inputs are unknown (like in real time sum of products in an ecommerce website)

*/


// **** when some values are defined ---->

/*
function numbers(n1, n2, ...n)
{
    console.log(n1); // 20
    console.log(n2); // 30
    console.log(n); // [ 4, 5, 6, 7, 8, 90 ]
}
console.log(numbers(20, 30, 4, 5, 6, 7, 8 ,90)); // output in function 
*/


// IT IS ONLY FOR CHECKING THAT IF VALUES OF ... OPERATOR CAN BE USED OR NOT

/*
function sum(n1, n2, ...n)
{
    let s;
    s = n1 + n2 + n;
    console.log("sum of numbers are ---->"+s); // 30,0,0,0,0 because array is added to numbers explaination in lines 108 to 110 
}

console.log(sum(1, 2, 3, 0, 0, 0, 0, 0));
*/


// when array is added with numbers

/*
let arr = [0, 0, 0, 0, 0];
let s = 1 + 2 + arr;
console.log(s);
*/

// adding numbers of many inputs in function

/*
function sum(...n) // here n is now an array of many values
{
    s=0;
    for(index of n)
    {
        console.log(index); // 1 2 3 4 6 7 output is in separate line but here to save line same line is used
        s+=index; //23 
    }
    return s;
}

console.log(sum(1, 2, 3, 4, 6, 7));
*/

//  ***** ARRAYS IN FUNCTION  **********

/*
let arr = [1, 2, 3, 4, 5];

function handleArrays(arr)
{
    return arr;

}
console.log(handleArrays(arr)); //[ 1, 2, 3, 4, 5 ]
*/


//  ***** OBJECTS IN FUNCTION  **********

/*
const user1 = 
{
    userName: "Abdullah",
    age: 24
};
const user2 = 
{
    userName: "Shahbaaz",
    age: 22
};


function handleObjects(user1, user2, user3)
{
    console.log("Username of user1 "+user1.userName+" and its age is "+user1.age); //Username of user1 Abdullah and its age is 24
    console.log("Username of user2 "+user2.userName+" and its age is "+user2.age); //Username of user2 Shahbaaz and its age is 22
    console.log("Username of user2 "+user3.userName+" and its age is "+user3.age); //Username of user2 ALi and its age is 15

}

handleObjects(user1, user2, 
    {
        userName: "Ali",
        age: 15
    }
);

// direct objects can also be passed like the way user3 has been passed
*/

// ***********  FUNCTION EXPRESSIONS  ***********
// storing function in variables and 

/*
let sum = function(a, b)
{
    let s = a + b;
    return s; 
}

console.log(sum); //[Function: sum] // defines that this is a function
console.log(sum(10, 100)); //110
*/

//   ******** HIGHER ORDER FUNCTIONS  *********
// A funvtion that takes one ormore than one  function as argument or returns a function or does both is called higher order function


/*
// when a function takes a function as argument 

function print(hello, n)
{

    for(let i=1; i<=n; i++)
    {
        hello();
    }

}
function hello()
{
    console.log("hello");
}

print(hello, 5); 
// hello
// hello
// hello
// hello
// hello
*/

// when function returns a function ****skipped





// ********** METHODS ******
// functiions defined in objects are called Methods

const calculator = 
{
    add: function(a, b) // it can also be written as add function(a, b) ....
    {
        console.log(a + b);
    },

    sub: function(a, b)
    {
        console.log(a - b);
    },

    mul: function(a, b)
    {
        console.log(a * b);
    }

    

}
calculator.add(10, 20); // 30
calculator.sub(10, 20); //-10
calculator.mul(10, 20); //200







