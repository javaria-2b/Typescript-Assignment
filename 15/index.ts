// Code from 14

export let membersArray = ["Lee Min hu", "On-Jo", "Cheong San"];
export const invitation = "You are invited to be my guest on weekend";

for (let i = 0; i <= membersArray.length - 1; i++) {
  console.log(i, membersArray[i], invitation);
}

// Starting Q 15

console.log(membersArray[2], "is not coming!");

// removing guest not coming
membersArray.splice(2, 1, "Namra");

// printing new invitations
membersArray.forEach((name) => {
  console.log(`${name} ${invitation}`);
});
