"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invitation = exports.membersArray = void 0;
// Starting Q 15
exports.membersArray = ["Lee Min hu", "On-Jo", "Cheong San"];
exports.invitation = "You are invited to be my guest on weekend";
console.log(exports.membersArray[2], "is not coming!");
// removing guest not coming
exports.membersArray.splice(2, 1, "Namra");
// printing new invitations
exports.membersArray.forEach((name) => {
    console.log(`${name} ${exports.invitation}`);
});
// Starting Q 16
console.log("Since we got a bigger dinner table, now we are inviting more friends");
exports.membersArray.unshift("Lisa");
exports.membersArray.splice(2, 0, "Jiso");
exports.membersArray.push("Mira");
console.log(exports.membersArray);
exports.membersArray.forEach((name) => {
    console.log(`${name} ${exports.invitation}`);
});
