// this keyword


// ******** USE OF THIS IN OBJECT METHOD

/*
// if this is used
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
// window is global object in browser and we make use of the methods(some methods are alert, prompt etc) in javascript code to run our code  




