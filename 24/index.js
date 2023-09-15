"use strict";
//using and or operator
let digit = 88;
console.log(digit > 50 && digit < 100 ? "True" : "False");
let digit2 = 105;
console.log(digit < 50 || digit < 100 ? "True" : "False");
//Tests using the lower case function
let girl = "Javaria";
console.log(girl == girl.toLowerCase() ? "True" : "False");
//Numerical tests
// inquality symbol "!="
console.log(girl != "Javaria" ? "True" : "False"); //test for inequality
console.log(girl == "Javaria" ? "True" : "False"); //test for quality
console.log(digit > 85 ? "true" : "False"); // greator than
console.log(digit2 < 85 ? "true" : "False"); //less than
// Test whether an item is in a array
let toyCars = ["green car", "blue  car", "yellow car", "red car", "pink car"];
let carToFind = "Blue Car";
let foundCar = toyCars.find(allcarsinlist => allcarsinlist === carToFind);
console.log("Did we find the green car? " + foundCar);
// Test whether an item is not in a array
let carToCheck = "Purple Car";
let CheckingCar = toyCars.find(allcarsinlist => allcarsinlist === carToFind);
console.log("Did we find the green car? " + foundCar);
