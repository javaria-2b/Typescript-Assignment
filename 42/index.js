"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.great_magicians = exports.magician = void 0;
let magician = ["Elis", "Dalton", "Lorraine", "Josh", "Rennai"];
exports.magician = magician;
// function show_magicians(magician: string[]) {
//   magician.forEach((glasstootadil) => console.log(glasstootadil));
// }
// show_magicians(magician);
function great_magicians(magicians) {
    for (let i = 0; i < magician.length; i++) {
        console.log(`Great ${magician[i]}`);
    }
}
exports.great_magicians = great_magicians;
great_magicians(magician);
