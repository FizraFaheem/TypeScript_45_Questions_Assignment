// Array of current users
let current_users = ["Usman", "Ali", "Qirat", "Zain", "Osama"]

// array of new users
let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"]

// Loop through new users to check for usernames avalibilty
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
        if(our_condition){
            console.log(`Sorry ${new_one_user} is already taken!`)
 }else{
    console.log(`This Username ${new_one_user} is available`)
 }
})
