
// uppgift 1
function sumArray(numbers) {
    let results = 0;
    for (let i = 0; i < numbers.length; i++) {
        results += numbers[i];
    }
    return results;
}

console.log(sumArray([1,3,4,5,8]));

// uppgift 2
function hittaStörsta(array){
    let biggestNumber = Math.max(...array);
    return biggestNumber;
}

console.log(hittaStörsta([20,25,67,93,54,29]));

//uppgift 3
function filteraPositiva(numbers1){
    let positivNum = numbers1.filter(num => num > 0);
    return positivNum;
}

console.log(filteraPositiva([-2,-7,3,1,9,-5]));

// uppgift 4
function arAllaJamna(arr){
    if (num => num %2 === 0) {
        console.log(true);
    }
    else{
        console.log(false);
    }
}

// console.log(arAllaJamna([1,5,3,8,2,6]));

// uppgift 5
function dubblaArray(arr){
    let dubbleNum = arr.map(num => num * 2);
    return dubbleNum;
}

console.log(dubblaArray([1,6,26,8]));

// uppgift 6
function filtreraOrdLängd(sträng, längd){
    let ordLängd = sträng.filter(ord => ord.length === längd);
    return ordLängd;
}

console.log(filtreraOrdLängd(["Volvo","BMW","Ford","Audi","Nissan"],4));
