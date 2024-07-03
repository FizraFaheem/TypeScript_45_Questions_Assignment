// Define a function with a rest parameter that accept items arguments representing our sandwiches
function makeSandwich(...items: string[]){
    console.log("\nMaking a Sandwich with the following items:");

    items.forEach(singleItem => console.log("-" + singleItem));
    console.log("Now Enjoy Sandwich");
}

// Calling teh function 3 times with 3 diffferent number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Ego");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Ego", "Cheese", "Chicken", "Lettuce", "Tomato");




