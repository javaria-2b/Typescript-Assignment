"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usernames = void 0;
exports.usernames = ["Admin", "Eric", "John", "Sara", "Sam", "Lisa", "Olivia"];
for (let i = 0; i < exports.usernames.length; i++) {
    if (exports.usernames[i] == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${exports.usernames[i]}, thank you for logging in again.`);
    }
}
