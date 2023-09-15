"use strict";
let usernames = ["Admin", "Eric", "John", "Sara", "Sam", "Lisa", "Olivia"];
const splice = usernames.splice(0, usernames.length);
// usernames=splice
console.log(usernames.length);
for (let i = 0; i <= usernames.length; i++) {
    if (usernames[i] === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else if (usernames.length == 0) {
        console.log("We need to find more users!");
    }
    else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}
