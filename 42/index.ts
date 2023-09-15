let magician = ["Elis", "Dalton", "Lorraine", "Josh", "Rennai"];

// function show_magicians(magician: string[]) {
//   magician.forEach((glasstootadil) => console.log(glasstootadil));
// }

// show_magicians(magician);


function great_magicians(magicians: string[]): void { 
    for (let i =0; i < magician.length; i++) {
        console.log(`Great ${magician[i]}`);
        
    }
}

great_magicians(magician);

export {magician, great_magicians}