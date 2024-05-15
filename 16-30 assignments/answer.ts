//Q#16:
    // More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

    // • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
    
    // • Add one new guest to the beginning of your array.
    
    // • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
    let guestList: string[] = ["Robert", "Romen", "Rolin"];
console.log ("\nNEW LIST OF INVITATION: \n");

for ( let j=0; j < guestList.length; j++){
console.log(`Dear ${guestList[j]}: \n you are invited to dinner! \n`);
}

console.log("Good news! We've found a bigger dinner table, so more space is available. So our new guests are: \n")

guestList.unshift("Cena");
guestList.splice(2, 0, "James");

guestList.push("John");


for ( let i=0; i < guestList.length; i++){
    console.log(`Dear ${guestList[i]}: \n you are invited to dinner! \n`);
}
    
//Q#17:
 // Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
    
 // • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
        
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
        
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
        
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
    
        

// let guestList: string[] = ["Robert", "Romen", "Rolin"];
console.log ("\nNEW LIST OF INVITATION: \n");

for ( let j=0; j < guestList.length; j++){
console.log(`Dear ${guestList[j]}: \n you are invited to dinner! \n`);
}

console.log("Good news! We've found a bigger dinner table, so more space is available. So our new guests are: \n")

guestList.unshift("Cena");
guestList.splice(2, 0, "James");

guestList.push("John");


for ( let i=0; i < guestList.length; i++){
    console.log(`Dear ${guestList[i]}: \n you are invited to dinner! \n`);
}

console.log(" Unfortunately, the new dinner table wont arrive on time, so I can only invite two guests to dinner with me");

// Using while to remove guests from the array untit only two names remain
while(guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry, ${removeGuest} I cant invite you to dinner`);
}

console.log("Invitations to the last 2 Guests");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

// Removing last two Guests from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);

    //Q#18:. Seeing the World: Think of at least five places in the world you’d like to visit.
    
    // • Store the locations in a array. Make sure the array is not in alphabetical order.
    
    // • Print your array in its original order.
    
    // • Print your array in alphabetical order without modifying the actual list.
    
    // • Show that your array is still in its original order by printing it.
    
    // • Print your array in reverse alphabetical order without changing the order of the original list.
    
    // • Show that your array is still in its original order by printing it again.
    
    // • Reverse the order of your list. Print the array to show that its
    // order has changed.
    
    // • Reverse the order of your list again. Print the list to show it’s back to its original order.
    
    // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
    
    // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
    
    
    let contries: string[] = ["Turkey", "China", "Farance", "Italy"];
console.log("Original Order:", contries);

console.log("Alphabetical Order:",[...contries].sort());

console.log("Still in Original Order:", contries);

console.log("Reverse Order:", [...contries].reverse());

console.log("Still in Original Order:", contries);

// we have Changed the original Array now
console.log("Original Array Revered:",contries.reverse());

console.log("Back to Original Order:", contries.reverse());

console.log("Sorted in Alphabetical Order:", contries.sort());

// we have Changed again the original Array now
console.log("Original Array Revered Again:",contries.reverse());

    
    
    
    
    
// Q#19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
    
let guestList0: string[] =["Cena", "Robert"]
let count_guestList: number = guestList0.length

console.log(`${count_guestList} People are coming to the dinner`)

// Q#20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
    
let cricketPlayers: string[] = ["Babar Azam", "Vrat Kohli", "Steve Smith", "Kane Williamson"];

console.log("Players I'd like to meet:", cricketPlayers);
    
    
    
    
 // Q#21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
    
 let university: {
    uniName: string;
     department: string; 
     noOfStudent: number
} = {uniName: "Karachi University",
department: "Islamic Learning",
noOfStudent: 30000
};

console.log(`University Info: ${university.uniName}, Departmen of ${university.department}, number of students ${university.noOfStudent}`);

//Q#22:Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
//to produce an index error. Make sure you correct the error before closing the program.
    
    
let students: string[] =["Aamir", "Munir", "Raza", "Usama"];

//producing error by Accessing invalid index of Array
// console.log(students[4]);
 //error removed
console.log(students[1]);
    
 // Q#23: Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test.  Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
    
let two = 2;

let four = 4;

let six = 6;

console.log("Test 1: Two is equal to 2?");
console.log(two == 2);

console.log("Test 2: Four is equal to 4?");
console.log(four == 4);

console.log("\nTest 3: Six is not equal to 4?");
console.log(six != 4);

console.log("\nTest 4: Four is smaller than 6?");
console.log(four < 6);

console.log("\nTest 5: Four is greater than 2?");
console.log(four > 2);

console.log("\nTest 6: Six is smaller than 4?");
console.log(six < 4);

console.log("\nTest 7:Two is equal to four?");
console.log(two == 4);

console.log("\nTest 8: Two is not equal to 2?");
console.log(two != 2);

console.log("\nTest 9: Two is greater than 4?");
console.log(two > 4);

console.log("\nTest 10: Four is equal to 100?");
console.log(four == 100);
    
    
//Q#24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
    
// • Tests for equality and inequality with strings
    
// • Tests using the lower case function
    
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
    
// • Tests using "and" and "or" operators
    
// • Test whether an item is in a array
    
// • Test whether an item is not in a array
    
    
let apple ="apple";
let upperCaseApple ="APPLE";
let twenty = 20;
let forty = 40;
let fruits = ["apple", "watermelon", "grapes"];

// testing for equality and inequality with strings

console.log("Is apple is equal to apple?");
console.log(apple == "apple"); //true

console.log("\n apple is not equal to apple?");
console.log(apple != "apple"); //false

// testing using lowerCase function
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLocaleLowerCase() == "apple"); //true

console.log("\n APPLE is not equal to apple after coverting to lowercase?");
console.log(upperCaseApple.toLocaleLowerCase() != "apple"); //false

// Numerical test
console.log("\n Is twenty is equal to fourty?");
console.log(twenty == forty); //false

console.log("\n Is twenty is not equal to forty?");
console.log(twenty != forty);  //true

console.log("\n Twenty is smaller than fourty");
console.log(twenty < forty); //true

console.log("\n Forty is greater than twenty");
console.log(forty > twenty);  //true

console.log("\n Is twenty is greater than or equal to 10?");
console.log(twenty >= 10);  //true

console.log("\n twenty is smaller than or equal to 10");
console.log(twenty <= 10); //false

// testing using "and" & "or" Operators
console.log("\n forty is not equal to twenty and forty is greater than twenty");
console.log(forty != 20 && forty > 20); //true

console.log("\n forty is not equal to twenty and forty is greater than fifty");
console.log(forty != 20 && forty > 50); //false

console.log("\n 40 is greater than 70 OR 40 is equal to 40");
console.log(40 > 70 || 40 == 40);  //true

console.log("\n 40 is greater than 70 OR 40 is not equal to 40");
console.log(40 > 70 || 40 != 40); //false

// test whether an item is in a array
console.log("\n Is grapes include in my Fruits array");
console.log(fruits.includes("grapes")); //true
 
// not include
console.log("\n Is grapes not include in my Fruits array");
console.log(!fruits.includes("grapes"));  //false


    
    
//Q#25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a
    //variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
    // • Write an if statement to test whether the alien’s color is green. If it is, print
    // a message that the player just earned 5 points.
    
    // • Write one version of this program that passes the if test and another that
    // fails. (The version that fails will have no output.)
    
    let alien_color = "green";

if (alien_color === "green"){
console.log("you earn 5 points");
}

if (alien_color === "yellow"){
    console.log("yellow");
}

// Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
// 1st version
let alienColor = "green";

if (alienColor === "green"){
    console.log("he just earned 5 points for shooting the alien")
}
else{
    console.log("he just earned 10 points");
}

// 2nd version

if (alienColor ==="black"){
    console.log("yellow")
}
else{
    console.log("he just earnrd 10 points");
}

// Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
 
let alienColor1 = "green";
 // 1st version
if(alienColor1 === "green"){
    console.log("(V1) You shot down green alien you have earned 5 points");  // (V1)
}
else if(alienColor1 === "yellow"){
    console.log("You shot down yellow alien you have earned 10 points");
}
else if(alienColor1 === "red"){
    console.log("You shot down red alien you have earned 15 points");
}
 
// 2nd version
let alienColor0 = "yellow";

if(alienColor0 === "green"){
    console.log("You shot down green alien you have earned 5 points");
}
else if(alienColor0 === "yellow"){
    console.log("(V2) you shot down yellow alien you earned 10 points");  // (V2)
}
else if(alienColor0 === "red"){
    console.log("you down red alien you earned 15 points");
}

// 3rd version
let alienColor01 = "red";

if(alienColor01 === "green"){
    console.log("you shot down green alien you earned 5 points");
}
else if(alienColor01 === "yellow"){
    console.log("you shot down yellow alien you earned 10 points");
}
else if(alienColor01 === "red"){
    console.log("(V3) you shot down red alien you earned 15 points");  //(V3)
}

        

    //Q#28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
    
    // • If the person is less than 2 years old, print a message that the person is a baby.
    
    // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
    
    // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
    
    // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
    
    // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
    
    // • If the person is age 65 or older, print a message that the person is an elder.
    
    let age: number = 21;

// Determining the stage of life using if-else chain
if(age < 2){
    console.log("You are a baby.");
}
else if(age >= 2 && age < 4){
    console.log("You are a toddler.");
}
else if(age >= 4 && age < 13){
    console.log("You are a kid.");
}
else if(age >= 13 && age < 20){
    console.log("You are a teenagers.");
}
else if(age >= 20 && age < 65){
    console.log("You are an adults.");
}
else if(age >= 65){
    console.log("You are elders.");
}

// Q#29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
    //• Make a array of your three favorite fruits and call it favorite_fruits.
    //• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
    //such as You really like bananas!
    
    let favoriteFruits: string[] =["Melon", "Strawberry", "Mango"];

// using five Independent "if" statements
if(favoriteFruits.includes("Melon")){
    console.log("I love melons");
}
if(favoriteFruits.includes("Strawberry")){
    console.log("I love strawberries");
}
if(favoriteFruits.includes("Guava")){
    console.log("I love guava");
}
if(favoriteFruits.includes("Mango")){
    console.log("I love mangoes");
}
if(favoriteFruits.includes("Peach")){
    console.log("I love peaches");
}

//Q#30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
    
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
    
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again
    
    let userNames: string[] = ["Aftab", "Rehan", "Ahmed", "Admin", "Saad"];

// using forEach loop on Array
userNames.forEach(oneUser =>{
    if(oneUser ==="Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})

    