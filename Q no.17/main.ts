//  creating a guest list array
let guestList = ["Qirat", "Faheem", "Ayesha", "Areeba"];

// making variable for those who cant come
let dontcome = guestList[0];

// printing tha name of guest of can not come
console.log(dontcome, "Nai Ahh Skti");

// add or remove values from guestlist array
guestList.splice(0,1,"Sana");

// message print for bigger dinner table
console.log ("Good News ! We have a Bigger Table For Dinner");

// adding a new guest at starting index of array
guestList.unshift("Ali");

// adding a new guest at ending index of array
guestList.push("Zainab");

// get a middle indexof our guest list array 
let middleIndex: number = Math.floor (guestList.length/2);

// adding a new guest at a middle index of array
guestList.splice(middleIndex,0, "Isneha");

// print message of updated list
console.log ("Updated List of our Guests");

// sending invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to Dinner with me?`));

// Inform that only two guests can be invited for Dinner
console.log("Unfortunately,the new Dinner table wont arrive on time, so I can only invite two guests to Dinner with me");

// using while loop to remove guests from the array until only two remains
while(guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I can't invite you to Dinner`);
}

// sending a invitation for the last two guests
console.log("Invitations to the last two Guests");

guestList.forEach (lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to Dinner`));

// printing last two guests
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);
















