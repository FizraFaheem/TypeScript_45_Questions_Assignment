 // Define variables 
let apple = "APPLE";
let uppercaseApple = "Apple";
let ten = 10;
let twenty = 20;
let fruits =["apple", "mango", "banana"];

// Test for equality and unequality with strings
apple = "apple";
console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != apple);

// Test using lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

// Numerical tests
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);

console.log("\n Is ten is greater than to zero?");
console.log(ten > 0);

console.log("\n Is twenty is less than ten?");
console.log(twenty < 10);

console.log("\n Is ten is greater than or equal to 5?");
console.log(10 >= 5);

console.log("\n Is twenty is less than or equal to 10?");
console.log(twenty <= 10);

//  tests using & and or operators
//  Using & operator
console.log("\n twenty is not equal to 10 and twenty is greater than ten?");
console.log(twenty != 10 && twenty > 10 );

console.log("\n twenty is not equal to 10 and twenty is greater than thirty?");
console.log(twenty != 10 && twenty > 30 );

// using || operators
console.log("\n 20 is greater than 50 or 20 is equal to 20?");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 or 20 is not equal to 20?");
console.log(20 > 50 || 20 != 20);

// Test whether an item is include in array
console.log("Is mango include in my fruits array?");
console.log(fruits.includes("mango"));

console.log("\n Is mango is not include in my fruits array?");
console.log(fruits.includes("mango"));



