function orderSandwiches (items: string[]) {
    console.log("Sandwich Summary");
    if (items.length === 0) {
console.log("You ordered an empty sandwich. Please add some ingredients.");
     } else {
    console.log("Ingredients:");
    items.forEach((item) => {
        console.log(`- ${item}`);
      });
    }
    console.log("Enjoy your sandwich!");
}

orderSandwiches(["Zinger", "Cheddar Cheese", "Lettuce", "Tomato"]);
orderSandwiches(["Sauce", "Patti"]);
orderSandwiches([]);