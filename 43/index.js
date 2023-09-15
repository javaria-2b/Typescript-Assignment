"use strict";
let magician = ["Jadoon", "shapack", "Hooper", "luffy"];
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
let great_magicians = magician.slice();
function make_super(great_magicians) {
    for (let n = 0; n < great_magicians.length; n++) {
        console.log(`Great ${great_magicians[n]}`);
    }
}
show_magicians(magician);
make_super(great_magicians);
