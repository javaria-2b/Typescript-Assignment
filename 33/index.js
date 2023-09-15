"use strict";
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let n = 0; n < numbersArray.length; n++) {
    if (numbersArray[n] === 1) {
        console.log(numbersArray[n] + "st");
    }
    else if (numbersArray[n] === 2) {
        console.log(numbersArray[n] + "nd");
    }
    else if (numbersArray[n] === 3) {
        console.log(numbersArray[n] + "rd");
    }
    else {
        console.log(numbersArray[n] + "th");
    }
}
