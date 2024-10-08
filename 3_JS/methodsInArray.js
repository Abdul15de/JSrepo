// ****  METHODS IN AN ARRAY ******

let cars = ["bmw" , "suv" , "maruti"];

//  ********  TO ADD AND REMOVE ELEMENTS IN LAST  ****   

/*
console.log(cars.push("toyota")); // 4
console.log(typeof(cars.push("toyota"))); // it is of type number becoz push return new length of array 
console.log(`array = ${cars} and its length = ${cars.length}`); //array = bmw,suv,maruti,toyota and its length = 4


console.log(cars.pop()); // toyota
console.log(`array = ${cars} and its length = ${cars.length}`); 

// multiple elements can also be added
console.log(cars.push("alto" , "nano")); //6
console.log(cars); // [ 'bmw', 'suv', 'maruti', 'toyota', 'alto', 'nano' ]
*/


// ******   TO ADD AND REMOVE FROM STARTING  *******


/*
console.log(cars.unshift("bugati"));  //4  
console.log(cars); //[ 'bugati', 'bmw', 'suv', 'maruti' ]
console.log(cars.shift()); // bugati becoz it remove s bmw
console.log(cars); // ['bmw', 'suv', 'maruti']
*/

// **** indexOf -> it returns the index of the eleent in the array  *****
/*
console.log(cars.indexOf("bmw")); //0
console.log(cars.indexOf("suv"));  // 1
console.log(cars.indexOf("abdullah")); // -1 because "abdullah" is not in the array
*/

// *****    INCLUDES -> check if the array has that element or not    *******


/*
console.log(cars.includes("")); // false because it does not include 
console.log(cars.includes("maruti")); // true
console.log(cars.includes("Maruti")); //false
console.log(cars.includes("lamborgini")); // false
*/

// *****  CONCATINATION --> to merge one array with the other
let primaryColors = ["red", "yellow"];
let secondaryColors = ["orange" , "green"];

/*
console.log(primaryColors.concat(secondaryColors)); // [ 'red', 'yellow', 'orange', 'green' ]
console.log(primaryColors); // [ 'red', 'yellow' ]
console.log(secondaryColors); // [ 'orange', 'green' ] 
// primary and secondary does not changes
*/


// **********   REVERSING ARRAY *******

/*
console.log(primaryColors.reverse()); // [ 'yellow', 'red' ]
console.log(primaryColors[0]); // yellow
*/


// **** slice is same as string ****  so not using it *****
// SLICE returns copy of protionof array


//  ****  SPLICE ->  HELPS TO REMOVE ,REPLACE AND ADD ELEMENTS IN PLACE  *****


// SLICE make changes to the original array also

/*
let name = ["Ali" , "Alok" , "Atul" , "dora" , "Oggy" , "Saif" , "Teja"];


console.log(name.splice(5)); // [ 'Saif', 'Teja' ]
console.log(name); //[ 'Ali', 'Alok', 'Atul', 'dora', 'Oggy' ] splice changes the original array also because it removes  'Saif" and "Teja"

 console.log(name.splice(0 , 2)); // [ 'Ali', 'Alok' ] it means that 0 index se start karo aur 2 element nkalo so it removes Ali and Alok
 console.log(name); // [ 'Atul', 'dora', 'Oggy' ]

 console.log(name); // before splice [ 'Atul', 'dora', 'Oggy' ]
 console.log(name.splice(1 , 0 , "nik" , "raju")); //[] empty because nothig to delete
 console.log(name); // after splice [ 'Atul', 'nik', 'raju', 'dora', 'Oggy' ]

 // splice (1 ,0 ,"nik,"raju") means ki 1 index se start karna hai 0(ek bhi  nhi) elements ok delete karna hai aur 1 index se nik aur raju ko add karna hai


 console.log(name.splice(1 , 2 , "nikhil" ,"Raj")); // [ 'nik', 'raju' ]
 console.log(name); // [ 'Atul', 'nikhil', 'Raj', 'dora', 'Oggy' ]

*/

// **********  SORT for sorting  *************  


/*
let days = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"];
days.sort();
console.log(days); // sort the days array from their first letter.

let num = [111,344,1,43,20];
num.sort();
console.log(num); // [ 1, 111, 20, 344, 43 ] here 111 comes b4 20 and 344 comes b4 43 because sort() converts them to string and then sorts them.

*/

//  *************  ARRAY REFERENCES   **********

// array is stored at memory addresses differenet arrays have different memory addresses

let arr1 = [];
let arr2 = [];
console.log(arr1 == arr2); // false   The == operator compares the references of the arrays, not their contents. Since arr1 and arr2 are two different objects in memory, the comparison returns false
console.log(arr1 === arr2); // false reference is checked so false.

// ***  but

let a = [];
let b = a;
console.log(a == b); // true
console.log(a === b); //true
// now b = a is written then reference of bith a and b becomes same and any change in a is reflected in b and vice versa.



// *******   ASSIGNMENT  ************

// **** TO GET LAST N NUMBERS OF ELEMENTTS IN AN ARRAY e.g-- n=3 so get three elements from the array

let arr = [1 , 2, 3, 4, 5];
let n = 2;
console.log(arr.slice(arr.length-n));
console.log(arr.slice(-n));





