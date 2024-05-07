//create class


class Plane{

 constructor(nbrSeats,flyesFrom,flyesTo){

    this.numberOfSeats = nbrSeats;
    this.flyesFrom = flyesFrom;
    this.flyesTo =flyesTo;
    this.pilots = ["John", "Maria", "Henry"];
    
    }

    addPilot(pilot){
    this.getPilotesCount.push(pilot);
    };

    removeLastPilot(){
    this.pilots.pop();
    }

    getPilotesCount(){

    return this.pilots.length;
    };
 

};

let bigPlane= new Plane(100,"Dubai", "Mexico City");
let smallPlane= new Plane(25, "Malmö", "Landskrona");


console.log(bigPlane);
bigPlane.removeLastPilot();
console.log(bigPlane);














