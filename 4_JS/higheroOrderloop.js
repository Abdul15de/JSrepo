// these are array , object and string specific loop


// for-of loop

/*
let nums = ["one" , 2 , "three"];
for(singleNumber of nums)
{
    console.log(singleNumber);
    console.log(typeof(singleNumber));
}

*/

//  ****  output
// one
// string
// 2
// number
// three
// string

// here singleNumber is a variable(iterator) and i, j, any variable name can be taken but for best ppractice ***** use suitable names like here used singleNumber 

// *** singleNumber is not number like i=1,i=2 in normal for here single number is the element which can be of any type like element one and three are string and two is number.



// *** for of in nested loop


/*
let list = [ ["table" , "chair" , "bed"] , ["speakers" , "earphones"]  , ["mango" , "apple"] ];

for(items of list)
{
    for(particularItem of items)
    {
        console.log(particularItem);
    }
}


// *****  output 
// table
// chair
// bed
// speakers
// earphones
// mango
// apple

*/

let out = console.log("enter yuor name");
console.log(out); // undefined because it cannot be taken.