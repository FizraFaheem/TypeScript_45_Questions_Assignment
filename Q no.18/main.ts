// Making a Array of countries and Print its Original Order
let countriesTovisit: String[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log ("Original Order:", countriesTovisit);

// Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesTovisit].sort());

// Show that the Array is Still in its Original order 
console.log("Still in Original Order:", countriesTovisit);

// Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", [countriesTovisit]. reverse());

// Show that the array is Still in its Original Order 
console.log("Still in Original Order:", countriesTovisit);

// We have changed the original Array order now
console.log("Original Array Reversed:", countriesTovisit.reverse());

// print the array to show that its back to its original order
console.log("Back to Original Order:", countriesTovisit.reverse());

// print the array to show that its order has been changed in Alphabetical order now
console.log("SOrted in Alphabetical Order:", countriesTovisit.sort());

// we have changed again the original Array Order now in reverse order again
console.log("Original Array Reversed Again:", countriesTovisit.reverse());



