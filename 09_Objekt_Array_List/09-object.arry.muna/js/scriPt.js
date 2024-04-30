
// Arry  and lists
let myArray =[1,2,3,4,5,6,7,8,9];
console.log (myArray);
console.log("myArry length id:"+ myArray.length)
 let lengd =myArray.length;
 console.log ("myArray length is :"+ lengd);
let valueOnIndexzero = myArray[0];
console.log("value on index zero:" + valueOnIndexzero);
let valueOnLastIndex = myArray[lengd-1];
console.log ("last index value is:" + valueOnLastIndex);

// Addning elemt at the list 
myArray.push("10");
console.log(myArray);
console.log ("myArray length is :"+ lengd);
//uPdate lengd var

lengd= myArray.length;
console.log("lengd var efter uPdated value, efter Push" + lengd);
// deleting last element in the list
let deletedlastIndex = myArray.pop();
console.log ("last element deleted" + myArray);
console.log ("last index value that was deleted" + deletedlastIndex);
console.log ("last element deleted" + myArray);
console.log ("last index value that was deleted" + deletedlastIndex);

let newvalue = 100;
myArray.push(newvalue);
console.log(myArray);

// for looP with Push ()  PoP();
for(let index =0; index <= myArray.length-1; index++){
    console.log ("we are on index:" +index);
console.log( "value is :"+ myArray[index]);
}
// for looP that Prints out values from the
for (let index= 10; index <=myArray.length-1; index--){
    console.log ("we are on index:" -index);
    console.log( "value is :"+ myArray[index]);
}
console.log (myArray[-1]);
console.log (myArray[1000]);
let arr = ["b"];
// matrix with double for loo
function changematrixsize(){
    let slider= document.getElementById("salider");
    let rows = document.getElementById("slider").getAttribute("value");
    let cols = document.getElementById("slider").getAttribute("value");

}

console.log(slider.value);

let rows =5;
let cols = 5;
let matrix=[];
for (let i = 0; i <rows;i++){
    let row =[];
    for(let j= 0;j<cols;j++){
row.push(j);
matrix.push(row);


console.log(matrix);
console.log(slider.value);
    }
}

let manualmatrix = [];

let manualcols =[];

manualmatrix.push(manualcols);
manualmatrix.push(manualcols);
manualmatrix.push(manualcols);
manualmatrix.push(manualcols);
manualmatrix.push(manualcols);
//
let listmeddledindex= (myArray.length-1)/2;
myArray. splice(listmeddledindex, listmeddledindex+2);
console.log
//
console.log ("rePlace elements interval 0-2");
myArray.splice(0,2,0,0);
console.log ("myArray efter rePlCing interval with zero"+myArray);
//
let slicedarrayItems = myArray.slice (0,3);
console.log("myArray after slicing index interval 0-3" +myArray);
console.log("sliced item in index interval 0-3" + slicedarrayItems);
// for looP vs while looP

for (let i= 0; i< 10;i++) {
console.log (i);
}
console.log (",,,,,,,,")
// variablr måste fins
let m = 0;
while(m < 10){
console.log(m);

}
// wile looP with even
let isrunning = true;
let counter = 0;
while(isrunning){


    console.log(counter + increament);
}
function backwards(){
    increament= -1
}
function forward(){
    increament = 1;
}
function stoP(){
    isrunning = false;
}