//DOM = document object model
// reperesents a document with a logical tree form all its node are objects and every element in html also becomes node.
// it allows us to select and manipulate/change the html elements
// parent node is document object 
// console.dir(document) is used to print properties of document object

// The HTML DOM is a standard object model and programming interface for HTML. It defines:
// The HTML elements as objects
// The properties of all HTML elements
// The methods to access all HTML elements
// The events for all HTML elements


// ****** SELECTION OF HTML AND CSS ELEMENTS USING DOM  ***********




//  ***** SELECTING ELEMENTS USING ID  ********

/*

// getElementById is a method in document object that is used to select html elements by their id. It returns the Element as object or null (if not found)

document.getElementById("mainImg"); // it will give img element =>   <img src="spiderman_img.png" id="mainImg">
// but here the img itself is an object

// to check that is object or not
let img1 = document.getElementById("mainImg");
console.log(typeof img1); // object
console.dir(img1); // will get all the properties( in key value pair all attributs are their) of img1


// ******** to access properties of the object(here img1) returned from  document.getElementById("mainImg");

console.log(img1.tagName); // 'IMG'
console.log(img1.id); //  mainimg

//short hand
document.getElementById("description").tagName; //'P'
document.getElementById("de"); // null because de is not an id

*/

// //  ***** SELECTING ELEMENTS USING CLASS  ********

/*
// getElementByCLAssName is a method in document object that is used to select html elements by their class name. It returns the all the Elements with similar class name as  HTML COLLECTION or empty collection (if not found)
// 


let c = document.getElementsByClassName("oldImg");
console.log(c); // will return HTML collection
// output
// HTMLCollection(3) [img.oldImg, img.oldImg, img.oldImg]
// 0: img.oldImg
// 1: img.oldImg
// 2: img.oldImg
// length: 3 

console.log(typeof c); // object

// to access elements of HTML collection
console.log(c[0]); 
console.log(c[1]);
console.log(c[2]);
// all three are itself objects


// to change the values
for(let i=0; i<c.length; i++)
{
    console.log(c[i].src); //prints scr  
    c[i].src = "spiderman_img.png"; // will chang all the below images to spider man image
}

*/

// // //  ***** SELECTING ELEMENTS USING their tag  ********


// getElementByTagName is a method in document object that is used to select html elements by their class name. It returns the all the Elements with similar tag name as  HTML COLLECTION or empty collection (if not found) 
//  ***** skipped because it is easy

// *****  QUERY SELECTOR  *****

/*
// IS EASY WAY THAN ABOVE

console.log(document.querySelector("h1"));  // gives h1 objects
console.log(document.querySelector("#mainImg"));  //img#mainImg  // gives img as object with id mainImg
console.log(document.querySelector("lddd")); // null becuas it doesnot exists
console.log(document.querySelector(".oldImg")); // img#abd.oldImg// gives first element with class name oldImg and id abd i.e creation_1.png wala 

console.log(document.querySelector("div a")); //a.boxLink gives first anchor tag with class name  boxlink

// to get all elements
// querySelctorAll

console.log(document.querySelectorAll(".oldImg")); // NodeList(3) [img#abd.oldImg, img.oldImg, img.oldImg]

//to access particular element

let parele = document.querySelectorAll(".oldImg");
console.log(parele[0]); //img#abd.oldImg
console.log(parele[1]); //img.oldImg
console.log(parele[2]);//img.oldImg

*/


// *****  MANIPULATION USING DOM i.e changing properties of element  ******
// jaise html ke structure ko change karna using properties of document object



// *** innerText , textContent , inneHTML ********


/*
let para = document.querySelector("p");
console.log(para.innerHTML); // shows complete markup tag 
console.log(para.innerText); // shows all visible text(i.e the text that is visible)
console.log(para.tectContent);  // shows content if text
// textContent me /ln ka matlab jab bhi editor me line change hua ho na ki browser(ui) me 
// agar koi text dispaly none hai jaise ****** hai to wo innerContent me dekhyi dega but innerText me nhi dikhayi dega
//* ******* output of above three is very long so it is better to see in console

// ***** changing values =>

let nameChange = document.querySelector("h1");
console.log(nameChange.innerText); // Spider Man
nameChange.innerText = "Abdullah Siddqui"; // will change h1 from Spider Man to Abdullah Siddqui in UI (browser)
console.log(nameChange.innerText); // Abdullah Siddqui

// to add underline on Abdullah Siddqui
//nameChange.innerHTML = "<u>Abdullah Siddqui</u>"; // adds underline ti h1

// another way(will do same as line 132 does but in better way) =>

nameChange.innerHTML = "<u>${nameChange.innerText}</u>";  // not get desired output because backtick key is not working

*/

// *********  MANIPULATING ATTRIBUTE  *******

/*
let img = document.querySelector("#mainImg");
console.log(img);  // img#mainImg ****sometimes it gives img#mainImg and sometimes it gives <img src = ...../> whole tag 
console.log(img.getAttribute("id")); //mainImg
img.setAttribute("id" , "SpidermanImg"); // id will be changed
img.setAttribute("src", "creation_1.png"); // image will be changed
img.setAttribute("class", "spiImg");

// console.log(document.querySelector("#mainImg"));

*/

//  *****  Manipulating style ********


/*
let heading = document.querySelector("h1");
heading.style.color = "red"; // will change the color
console.log(heading.style.color); // red

heading.style.backgroundColor = "aqua"; // will change the bgcolor


// to change the color of links 
let links = document.querySelectorAll(".box a");
console.log(links); // links will be a html collection

// links.style will show all the properties of inline css not extrnal css as expalined by Shraddha MaM


// iterating ove each element of links collection

for(let i=0; i<links.length; i++)
{
    links[i].style.color = "red"; //will change color to red
}

// *** all changes are done as inline css not external css 

*/


//  ********** MANIPULATING STYLE USING classList ******/

/*
// this is used because .style MAKE CHANGES TO INLINE WHILE IT MAKE CHANGES TO EXTERNAL CSS USING CLASS



let image = document.querySelector("img");
console.log(image.classList); // this is done when no class was there in the img tag
//OUTPUT=> OMTokenList [value: '']
// length: 0 
// value: "" 
// length: 0 means that there is no class used

// to know more class in img tag is added as class = "abc xyz"

//classList is a HTML element
console.log(image.classList);
//  output ==>
// DOMTokenList(2) ['abc', 'xyz', value: 'abc xyz']
// 0: "abc"
// 1: "xyz"
// length: 2
// value: "abc xyz"

for(let i=0; i<image.classList.length; i++)
{
    console.log(image.classList[i]);
}
//output 
//abc
//xyz

// ****** adding and removing class 

// to check this, class green was written in external CSS as .green{ color: green} and .wavy{  text-decoration: wavy} and 

let heading = document.querySelector("h1");
heading.classList.add("green");// will change the color of h1 from black to green 
heading.classList.add("wavy"); // wavy lines will be added to  Spider Man

//   **** so more then one classes can be addded but and all of tehm are applies but in setAttribute only one at a time i.e if we have to change add green and wavy classes using setAttribute then only the latest change i.e. wavy  will be done and previously written class green will have no effect on it

// **** removing class
heading.classList.remove("green"); // green class is removed

//  ****** contains

console.log(heading.classList.contains("green")); // false becoz h1 does not contains green after removing it in line 230
console.log(heading.classList.contains("wavy"));// true

//  ****  toggle 
// if class exist then it will add and if not exist then it will remove
// it returns true or false value
// it does work of contin

heading.classList.toggle("green");// before line 240 green was removed so it adds it and hence the color of h1 also changes to green
console.log(heading.classList.toggle("green"));// false which means that green was not there so it adds it


heading.classList.toggle("wavy");
console.log(heading.classList.toggle("green"));// true which means that wavy was there

*/

//  ****  NAVIGATION i.e moving from one nodes to another like moving from child to parent, from dibling to parent etc...*******

/*

// **** parent and child
let heading4 = document.querySelector("h4");
console.log(heading4.parentElement); // div.box
console.log(heading4.children); //[] empty HTML collection

let parentdiv = document.querySelector(".box");
console.log(parentdiv.children); // HTMLCollection(2) [h4, ul]
console.log(parentdiv.childElementCount); // 2


// siblings
let ullist = document.querySelector("ul");
console.log(ullist.children);// HTMLCollection(3) [li, li, li]


console.log(ullist.children[0]); //li
console.log(ullist.children[1]); //li
console.log(ullist.children[2]); //li

console.log(ullist.children[0].previousElementSibling); //null becoz it is the first child
console.log(ullist.children[2].previousElementSibling); //li

*/

// *****  ADD NEW HTML ELEMENT  ****
/*
let newP = document.createElement("p"); // p is created
console.log(newP);
newP.innerText = "I am a new P";

// here p is created with innerText but not added in the html because its location is not set ki kaha hoga kiske neeche ya upar hoga

// so adding created newP element

let b = document.querySelector("body");
b.appendChild(newP);// created in last of body because append means last me add kar do

// ** append is also there

// **** repend adds in the last

b.prepend(newP); // adds in starting in ui

*/


// ****** insert adjacent => to insert at exact location


/*
let btn = document.createElement("button");
btn.innerText = "click me!";

// now adding p in defferent locations
let para = document.querySelector("p");
para.insertAdjacentElement("beforebegin" , btn);// will add btn before beginning of the para i.e after About parent is not b it is btween about and spider-Man ....
para.insertAdjacentElement("afterbegin" , btn); // will add element inside p tag but in startitng its parent is p
para.insertAdjacentElement("beforeend" , btn);  // button's parent is p but it will be in the last of p tag
para.insertAdjacentElement("afterend" , btn); // after p tag ends and p is not it's parent
*/


// ***** to remove elements ****
let para = document.querySelector("p");
let body = document.querySelector("body");
body.removeChild(para); // para ko select kaeke hoga directly body.removeChild("p"); se error aa rha hai
body.remove(); // removes complete body
