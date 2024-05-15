"use strict";
//Q#31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userNames = ["Aftab", "Faisal", "Ali", "Admin", "Irfan"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array is empty we need to find some users!");
}
else {
    // using forEach loop on Array
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
    });
}
//Q#32:Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// Array of current users
let current_users = ["John", "Rolin", "Steve", "Romen", "Rock"];
// Array of new users
let new_users = ["Daldon", "Newton", "Steve", "Sachin", "Rolin"];
//loop through new users to check usernames avaibility
new_users.forEach(new_one_user => {
    // making a condition for username aready exist and save in our condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken`);
    }
    else {
        console.log(`This Username ${new_one_user} is available`);
    }
});
// Q#33:Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Using for loop
for (let oneNumber of numbers) {
    let ordinalEnding;
    if (oneNumber === 1) {
        ordinalEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${oneNumber}${ordinalEnding}`);
}
// Q#34: Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
let pizzas = ["marghareta", "Fajita", "Haawaiin"];
//using for loop
for (let onePizza of pizzas) {
    console.log(`I love to eat ${onePizza} pizza`);
}
//print a message outside for a loop
console.log("I love pizzas");
// Q#35: Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
let petAnimals = ["Dog", "Horse", "Cat"];
// using for-loop
for (let onePet of petAnimals) {
    console.log(`A ${onePet} would make a great pet`);
}
//print a message outside 
console.log("Array of these animals would make a great pet\n");
// Q#36:T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
function make_shirt(size, printmessage) {
    console.log(`You selected ${size} size shirt with ${printmessage} print on shirt`);
}
make_shirt("large", "Faizee Coding Master");
// Q #37: Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function makeShirt(size = "Large", printMessage = "I love Programming") {
    console.log(`Creating a ${size} shirt with the message ${printMessage} print on shirt`);
}
// Calling a function by default values
makeShirt();
// Calling a function with medium size and by default message
makeShirt("Medium");
// calling a function now with a small size and also different message
makeShirt("Small", "I love Coding");
// Q #38 Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Islmabad");
describe_city("Melbourne", "Australia");
// Q#39City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
let cc1 = cityCountry("Karachi", "Pakistan");
let cc2 = cityCountry("London", "England");
let cc3 = cityCountry("Rome", "Italy");
console.log(cc1);
console.log(cc2);
console.log(cc3);
// Q#40: Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function makeAlbum(artist, title) {
    let pictures = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + artist.slice(1)
    };
    return pictures;
}
let album = makeAlbum("Hamza", "city of lights");
console.log(album);
album = makeAlbum("Faisal", "Love");
console.log(album);
album = makeAlbum("Aslam", "lonely");
console.log(album);
// Q 41:. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
let magicians = ["Kock", "John", "Dunk"];
function show_magicians() {
    console.log(magicians);
}
show_magicians();
// Q#42: Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
function make_great(message) {
    return message;
}
let fk = make_great("the great");
console.log(fk, magicians[0]);
console.log(fk, magicians[1]);
console.log(fk, magicians[2]);
// Q#43: Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
function show_magicians1(magicians) {
    for (let magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great1(magicians) {
    let modifiedMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push(magicians[i] + " the great");
    }
    return modifiedMagicians;
}
let magicians0 = ["Ahmed", "Raza", "Jawad"];
let copyMagicians = magicians0.slice();
let copy_great_magicians = make_great1(copyMagicians);
//original
console.log("Original Array\n");
show_magicians1(magicians0);
//copy
console.log("\n Copy Array\n");
show_magicians1(copy_great_magicians);
// Q#44: Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function make_sandwich(...items) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
// Q#45:Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
function create_car(manufacturer, model) {
    return manufacturer + " " + model;
}
let myCar = create_car("BMW", "red");
console.log(myCar);
