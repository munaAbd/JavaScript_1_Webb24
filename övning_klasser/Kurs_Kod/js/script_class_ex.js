//create class

class Plane{

  constructor(nbrSeats, flyesFrom, flyesTo){
    this.numberOfSeats = nbrSeats;
    this.flyesFrom = flyesFrom;
    this.flyesTo = flyesTo;
    this.pilotes = ["John", "Maria", "Henry"];
  }

  addPilot(pilot){
    this.pilotes.push(pilot);
  };
  /* this removes last pilot from the pilot list */
  removeLastPilot(){
    this.pilotes.pop();
  };
  getPilotsCount(){
    return this.pilotes.length;
  };
};

let bigPlane = new Plane(100, "Dubai", "Mexico City");
let smallPlane = new Plane(25, "Malmo", "Landskrona");

console.log(bigPlane.pilotes);
bigPlane.removeLastPilot();
console.log(bigPlane.pilotes);



