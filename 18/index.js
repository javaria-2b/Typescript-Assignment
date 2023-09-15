"use strict";
//original array
let originalPlaces = ["Germany", "Canada", "Malaysia", "Lithonia", "Dubai"];
console.log("Intial Array:", originalPlaces);
//arrray in alphabateical order
let sortedarray = originalPlaces.slice().sort();
console.log("Alphabatical Sorted Array:", sortedarray);
//original array
console.log("Original Array List:", originalPlaces);
//reverse alphabateical order
let reverseSortedArray = sortedarray.slice().sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabatically Sorted array:", reverseSortedArray);
// original array
console.log("Original array:", originalPlaces);
// Reversed Orignal Array
let R = originalPlaces.reverse();
console.log("Reversed Original Array:", R);
//Reversing the order
let O = R.reverse();
console.log("Reversing the order", O);
//stored in alphabetical order
let Alphaorder = O.slice().sort();
console.log("alphabetical order", Alphaorder);
//stored in reverse alphabetical order
let ReverseOrder = Alphaorder.reverse();
console.log("reverse alphabetical order", ReverseOrder);
