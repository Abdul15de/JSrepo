// **** FOR LOOP IS USED TO ITERATE(REPEAT) THE ELEMENT *********

// *******  normal e.g of loop

/*

for(let i=0; i<5; i++)
{
    console.log("HELLO"); // prints HELLO 5 times
}
//console.log(i); // error -- i is not defined because i is declared in for scope and ends with its ending 

*/

/// **** PRINT ODD NUMBER FROM 1 TO 15

/*

for(let i=1; i<=15; i=i+2)
{
    console.log(i);
}

*/

// ******** MULTIPLICATION TABLE OF 12  *****

/*
for(let i=1; i<=10; i++)
{
    console.log("12 * "+i+" = "+12*i);
}
OUTPUT -> 
12 * 1 = 12
12 * 2 = 24
12 * 3 = 36
12 * 4 = 48
12 * 5 = 60
12 * 6 = 72
12 * 7 = 84
12 * 8 = 96
12 * 9 = 108
12 * 10 = 120
*/

// ********  BREAK AND CONTINUE  ***********

/*
//  break is used to break the flow of loop

// *** NORMAL EXAMPLE ***
let favnum = 5;
for(let i=1; i<=10; i++)
{
    if(i == favnum)
    {
        break;
    }
    console.log(i);
}

// *********  BREAK WITH NESTED LOOP*

for(let i=1; i<=5; i++)
{
    console.log("******  OUTER LOOP AT I = "+i);
    if(i == 3)
    {
        break; // goes out of the outer loop at i == 3
    }
    
    for(let j=1; j<=3; j++)
    {
        console.log("inner loop at j = "+j);
        if(j == 2)
        {
            break; // it breaks only inner loop at j == 2
        }
    }
}
console.log("AT  I == 3 OUTER LOOP ENDS");


//   *** output *****
// ******  OUTER LOOP AT I = 1
// inner loop at j = 1
// inner loop at j = 2
// ******  OUTER LOOP AT I = 2
// inner loop at j = 1
// inner loop at j = 2
// ******  OUTER LOOP AT I = 3
// AT  I == 3 OUTER LOOP ENDS



// hence it is verified that break onlya breaks the flow of current lop(means loop in which it is written) like in inner loop at j == 3 it only ends the current loop(inner loop)

*/

// ******  CONTINUE *****

// continue skips the current iteration and contineus to the next one

/*

for(let i=1; i<=3; i++)
{
    if(i == 2)
    {
        console.log("i detected at 2 and skipped");
        continue;
    }
    console.log("value of i at i = "+i);
}

// value of i at i = 1
// i detected at 2 and skipped
// value of i at i = 3

*/


// ********   LOOPS IN ARRAY    *******

let fruits = ["mangoes" , "banana" , "apple"];
for(let i=0; i<fruits.length; i++)
{
    console.log(fruits[i]);
}
// ** output **
// friut at i =0 is mangoes
// friut at i =1 is banana
// friut at i =2 is apple

// ****  loop in nested array  ****

let name = [ ["Alok" , "Atul" , "Ali"] , ["Sita" , "Ritu" , "Rama"] ];

for(let i=0; i<(name.length); i++)
{
    if(i == 0)
    {
        console.log(" ****  BOYS NAME ARE -->");
    }
    if(i == 1)
    {
        console.log(" ****  GIRLS NAME -->");

    }
    for(let j=0; j<(name[i].length); j++)
    {
        console.log(name[i][j]);
    }

}

// ****  output *****
// ****  BOYS NAME ARE -->
// Alok
// Atul
// Ali
//  ****  GIRLS NAME -->
// Sita
// Ritu
// Rama



// *** DO-WHILE AND WHILE LOOPS ARE SKIPPED
