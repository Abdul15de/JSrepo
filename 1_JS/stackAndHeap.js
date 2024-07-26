// ***** STACK AND HEAP MEMORY CONCEPT
// ALL PRIMITIVE DATATYPES USE STACK ALOOTMENT OF DATA AND ALL THE NON PRIMITIVE DATATYPES USE THE HEAP MEMORY

//E.G FOR PRIMITIVE

/*
let a=5;
let b = a;
a++;
console.log(`value of a after increament = ${a} and value of b is ${b}`); // value of a after increament = 6 and value of b is 5 

//hence b remains same but a is changed because when a=b is written only copy of value a i.e 5 is assigned to b so when value of a is changed then threr was no effect on b 
*/


// E.G FOR NON-PRIMITIVE

/*
let obj = 
{
    a: 10,
    b: 20,
};

obj.a = obj.a + 1;
obj.b = obj.a;
console.log(obj.b);
*/

// here value of b changes with a becoz the value of a is a reference type stored in heap of a memory

// **  primitives are stoerd






