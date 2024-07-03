"use strict";
// Making a Function
function make_shirt(size = "Large", printMessage = "I Love Typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// Creating a function with by-default values
make_shirt();
// Creating a function now with medium size and default message
make_shirt("Medium");
// Creating a function now with small size and also different print message
make_shirt("small", "I Love Javascript");
