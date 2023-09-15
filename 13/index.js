"use strict";
const transportarray = [
    "Corolla",
    "Civic",
    "Sonata",
    "Supra",
    "Audi",
    "Merceedes",
    "Tesla",
];
const comments = [
    "is a classic car",
    "is good for family",
    "Have more than 4 seats",
];
for (let i = 0; i <= transportarray.length - 1; i++) {
    for (let x = 0; x <= comments.length - 1; x++) {
        console.log(i, ":", transportarray[i], comments[x]);
    }
}
