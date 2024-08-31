// objects within Object


//     ********* NESTED OBJECT **********
/*

const stu = 
{
    aman:
    {
        sub: "Maths",
        age: 24
        
    },

    ali:
    {
        sub: "biology",
        age: 23
    }
};

console.log(stu); //{ aman: { sub: 'Maths', age: 24 }, ali: { sub: 'biology', age: 23 } }

console.log(stu.aman); // { sub: 'Maths', age: 24 }
// console.log(aman.age); // error
console.log(stu.aman.age); //24
console.log(stu.aman.sub); // Maths

console.log(stu.ali); // { sub: 'biology', age: 23 }
console.log(stu.ali.age); //23
console.log(stu.ali.sub); //biology


// **** changing values and adding new also

stu.aman.marks = 90; // marks created
stu.aman.age = 26; // age changed to 26

console.log(stu.aman);

*/

//  ********  ARRAY OF OBJECTS  *******
//means array with lots of objectas in it

/*
const stu = 
[
    aman =
    {
        age: 23,
        class: 8
    },
    rohit = 
    {
        age: 25,
        class: 10
    },
    ali = 
    {
        age: 30,
        class: 2
    }
]




console.log(stu); // [ { age: 23, class: 8 }, { age: 25, class: 10 }, { age: 30, clas: 2 } ]

console.log(stu[0]); //{ age: 23, class: 8 }
console.log(stu[0].age); // 23
console.log(stu[1]); // { age: 25, class: 10 }
console.log(stu[2]); // { age: 30, class: 2 }
console.log(aman.age); // 23 possible but in nested objects not possible


// values can also be added and changed as same as objects.

*/
