// scoPe exm

function outerFunc() {
    let num = 10;
    function innerFunc(){
        console.log (num);
    }
    innerFunc();
    return innerFunc;
}
// outerFunc();
let  closureEx = outerFunc();
closureEx();

// counter
let count = 2;

function add(){

    for (let i = 0; i < 10; i++) {
        count = count + 1;
        let h1 = document.createElement("h1");
        h1.innerText = count;
        document.body.appendChild(h1);  
    }
}
    
    //
   let counter = 0;
function läggTillMaträtt() {
  counter++;
  console.log(`En maträtt tillagd. Det finns nu ${counter} maträtter.`);
}

function antalMaträtter() {
  console.log(`Det finns totalt ${counter} maträtter.`);
}

function visaMaträtter() {
  for (let i = 1; i <= counter; i++) {
    console.log(`Maträtt ${i}`);
  }
}

function taBortMaträtt() {
  if (counter > 0) {
    counter--;
    console.log(`En maträtt borttagen. Det finns nu ${counter} maträtter kvar.`);
  }
}