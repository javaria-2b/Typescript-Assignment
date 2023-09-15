"use strict";
let current_users = ["Ariel", "Maya", "Davis", "Charlie", "Mia"];
let new_users = ["Mia", "Billie", "Taylor", "Ariel", "Justin"];
let currentusers = current_users.map((user) => user.toLowerCase());
let newusers = new_users.map((user) => user.toLowerCase());
for (let n = 0; n < current_users.length; n++) {
    if (currentusers.includes(newusers[n])) {
        console.log(newusers[n] + " is already taken!");
    }
    else {
        console.log(newusers[n] + " is available!");
    }
}
