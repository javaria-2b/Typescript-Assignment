// Starting Q 15
export let membersArray = ["Lee Min hu", "On-Jo", "Cheong San"];
export const invitation = "You are invited to be my guest on weekend";

console.log(membersArray[2], "is not coming!");

// removing guest not coming
membersArray.splice(2, 1, "Namra");

// printing new invitations
membersArray.forEach((name) => {
  console.log(`${name} ${invitation}`);
});

// Starting Q 16
console.log("Since we got a bigger dinner table, now we are inviting more friends");

membersArray.unshift("Lisa");
membersArray.splice(2, 0, "Jiso");
membersArray.push("Mira");

console.log(membersArray);

membersArray.forEach((name) => {
    console.log(`${name} ${invitation}`);
  });

  //Starting Q 17
  console.log("My sincere apologies but we can invite only 2 people");

console.log(membersArray.pop(),"I am sorry since you can't be invited to dinner due to less space");
console.log(membersArray.pop(),"I am sorry since you can't be invited to dinner due to less space");
console.log(membersArray.pop(),"I am sorry since you can't be invited to dinner due to less space");
console.log(membersArray.pop(),"I am sorry since you can't be invited to dinner due to less space");

console.log(membersArray.length);

membersArray.forEach((name) => {
    console.log(`${name} ${invitation}`);
  });

console.log(membersArray.pop(),"I am sorry since you can't be invited to dinner due to less space");
console.log(membersArray.pop(),"I am sorry since you can't be invited to dinner due to less space");
console.log(membersArray.length);

//Starting Q 19
console.log(membersArray.length, " members are inivted to dinner");