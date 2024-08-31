// Objects are collection of propearty each propaerty contains key value pairs

//  *****   creating objects   *********

/*

let student = {
    name: "Shraddha",
    age: 23,
    marks: 94.4,
    city: "delhi"
};
console.log(student); //{ name: 'Shraddha', age: 23, marks: 94.4, city: 'delhi' }   

// when object is const then it is same as array reference i.e. array or object name cannot be changed but the value in it can be changed  

// arrys can also be taken as key and value in objects 


const item = 
{
    1: 2000,
    nul: 30,
    null: 50,
    price: 10,
    discount: "50%",
    colors: ["Red", "blue"],
    11: 30000,
   
};

console.log(item.colors); // [ 'Red', 'blue' ]

// ****     TO ACCESSS THE VALUE OF PARTICULAR KEY OF OBJECT   *****

//  two ways
console.log(item.price); // 10 mostly used better way 
console.log(item["price"]); // 10
console.log(item.colors[0]); // Red
console.log(item.colors[1]); //blue



// ******IMP    **** conversions of objects  
console.log(item[1]); //  1 is automativ\cally converted to "1" so it can be accessed by item[1]. here converted "1" is then matched with key in the object then prints output if finds it.
// console.log(item.1) // error beacuse . operator dor=es not converts it to string("1")
console.log(item[null]); // 50
// console.log(item[nul]); // error



// like 1 is cverted to "1" Similarly null is converted to "null" so it can be accessed by item[null] but nul cannot be accessed by item[nul] becoz js takes it as variable not a string. However, it canbe accessed through item["nul"].

// same with true, false,undefined ,numbers like with null and 1.

*/

//  ****    ADD AND UPDATE KEY AND VALUE IN OBJECT  ******

const student = 
{
    name: "ali",
    city: "agra",
    marks: "73.4",
    age: 24
};

student.city = "GKP"; // changing key
console.log(student.city); // changed from agra to gkp 

console.log(student.gender); // undefined becoz it doesnot existin the object
student.gender = "MAle"; // to add new key value
console.log(student.gender); // male becoz after defining  gender now exist in the object

delete student.age;
console.log(student); // { name: 'ali', city: 'GKP', marks: '73.4', gender: 'MAle' }








