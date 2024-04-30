let myHeader =  document.querySelector("h1");// 
myHeader.innerText = "this is the new header text";
//change the content in the body element
let body = document.querySelector("body");// <-get elemnt from html
body.innerHTML = body.innerHTML + "<h2>new changed html</h2>";// <-add html elemnt

//change body background color
body.style.backgroundColor = green;

myHeader.id = "myHeader";


console.log(myHeader.id);


console.log(myHeader.attributes);


myHeader.classList.add("myHeaderClass");

//
console.log(myHeader.classList);

let header1 = document.getElementById("myHeader");
append child node to the body element
let newH2 = document.createElement("h2");// create new element
newH2.innerText = "this is the newH2  appenndddeddd"; //add text to new element
newH2.id = "newID";//add id attribute to new element
//append new element to body
body.appendChild(newH2);


//create and add 100 new p elements to body
for (let index = 0; index < 100; index++) {
    let newP = document.createElement("p");
    newP.innerText = index;