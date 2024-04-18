/*
for (let row = 1; row < 6; row++) {
    let cell ="";

    for (let col = 1; col < 6; col++) {
        cell += "|" + row * col + "| \t" ;
    }
    console.log(cell);
}

*/

/*
console.log("hej");

let body = document.getElementsByTagName("body")[0];
//document.createElement("body"); //document.body
body.style.backgroundColor = "rgb(211,211,211)";
//body.appendChild(body)


let myHeader = document.createElement("h1");
myHeader.innerText = "this is the new header text";
body.appendChild(myHeader)


let myParaghraph = document.createElement("p");
myParaghraph.innerText = "this is the new paragraph";
body.appendChild(myParaghraph);

*/



//get bodyref from
let documentBody = document.getElementById("body");
//create table 
let table= document.createElement("table");

table.style.border = "1 px solid black ";
table.style.width = "25px";

let rowCount = 10;
let colCount = 5;

for( let row= 0; row < rowCount; row++){
    let tableRow = document.createElement("tr");
    tableRow.style.border = "1 px solid black ";
    tableRow.style.width = "5px";
    table.appendChild(tableRow);


    for ( let col = 0; col < colCount; col++){

        if ( row=== 0) {
            let tableHeader = document.createElement("th");
            tableHeader.innerText= "HEADER";
            tableHeader.style.border = " 2px solid lightblue"; 
            tableRow.appendChild(tableHeader);

        }else{
            let tableData = document.createElement("td");
            tableData.setAttribute("id", `${row}${col}`);
            tableData.style.border = " 2px solid lightblue"; 
            tableData.innerText = col;
            tableRow.appendChild(tableData);

        }

    }
}

        documentBody.appendChild(table);


 /*   for ( let col = 0; col < colCount ; col++){

        let tableData = document.createElement("td");
        tableData.style.border = " 2px solid lightblue";                // gamla versionen
        tableData.setAttribute( "id", `${row} ${col}`);
        tableData.innerText = col;
        tableRow.appendChild(tableData);
    }

    
        documentBody.appendChild(table);
*/

   for ( let row = 0; row < rowCount ; row++) {
    for( let col = 0; col < colCount; col++) {
        if( row !== 0){

        
        document.getElementById (`${row}${col}`).innerText = row;

        }
    }


    }

    document.getElementById(`34`).innerText="text";

    let header4 = document.getElementById(`04`);
    header4.innerText ="hej";

   










