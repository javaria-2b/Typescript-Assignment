"use strict";
// Code from 14
Object.defineProperty(exports, "__esModule", { value: true });
exports.invitation = exports.membersArray = void 0;
exports.membersArray = ["Lee Min hu", "On-Jo", "Cheong San"];
exports.invitation = "You are invited to be my guest on weekend";
for (let i = 0; i <= exports.membersArray.length - 1; i++) {
    console.log(i, exports.membersArray[i], exports.invitation);
}
// Starting Q 15
console.log(exports.membersArray[2], "is not coming!");
// removing guest not coming
exports.membersArray.splice(2, 1, "Namra");
// printing new invitations
exports.membersArray.forEach((name) => {
    console.log(`${name} ${exports.invitation}`);
});
