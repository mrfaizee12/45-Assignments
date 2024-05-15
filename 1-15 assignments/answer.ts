//Q#01:

//Install Node.js, TypeScript and VS Code on your computer

//Q#02:Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName: string = "Faizan";
console.log(`Hello ${personName}, would you like to some TypeScript today?`);

//Q#03:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName0: string ="Faizan Anjum";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace (/\b\w/g, (char) => char.toUpperCase()));


//Q#04:   Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:    Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”")


//Q#05:Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = "Albert Einstein";
let message0: string = `once said, “A person who never made a mistake never tried anything new.”`;
console.log(famous_person,message0);



//Q#06 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let Namewithwhitespace: string = "\t\n FAIZAN \t\n";
console.log(Namewithwhitespace);
let Namewithoutwhitespace = Namewithwhitespace.trim();
console.log(Namewithoutwhitespace);


//Q#07:Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

console.log(4 + 4);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);

//Q#08:  You should create four lines that look like this: console.log(5 + 3)

console.log(5 + 3)
console.log(12- 4)
console.log(2 * 4)
console.log(16 / 2)
//Q#09:Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favorite = "5 is my favourite number"
console.log(favorite)

/* Task # 9 : Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

Task # 10 (Part 1) : Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.*/

//FAIZAN ANJUM
//thursday, feb-29-2024

//store my favorite number in a variable
const Favorite_Number : number = 99;
//revealing my favorite number
const Message : string =( `My favorite number is , ${Favorite_Number}` );
console.log(Message);

/* Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.

Question 10 (part 2): Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.*/

//Faizan Anjum
//march-06-2024
 
let names0: string[] = ["Faizan", "Aziz", "Umar", "Hassan"];

//printing names one by one
console.log(names0[0]);
console.log(names0[1]);
console.log(names0[2]);
console.log(names0[3]);

//Q#12:Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names: string[] =["Faizan", "Jawad", "Asad", "Fahim"];
console.log(`your laugh is my endless happiness, ${names[0]}`);
console.log(`your laugh is my endless happiness, ${names[1]}`);
console.log(`your laugh is my endless happiness, ${names[2]}`);
console.log(`your laugh is my endless happiness, ${names[3]}`);

//Q#13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string[] = ["heavy bike", "car", "bicyle", "aeroplane"];

console.log(`"I would like to own a" : ${transportation[0]}`);
console.log(`"I would like to own a" : ${transportation[1]}`);
console.log(`"I would like to own a" : ${transportation[2]}`);
console.log(`"I would like to own a" : ${transportation[3]}`);

//Q#14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestArr : string[] =["Faizan", "Aziz","Jawad"];
guestArr.map((items) => console.log(`Dear ${items}, You are invited to the dinner`));

//Q#15:
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
    
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
    
 // • Print a second set of invitation messages, one for each person who is still in your list.

    let guestArr1: string[] =["Faizan", "Feroz", "Faisal"];
    let canNotAttend: string ="Faian"
    
    // console.log(canNotAttend + " " "can not attend the dinner.")
    
    let newGuest: string = "Aziz"
    
    guestArr [guestArr1.indexOf(canNotAttend)] = newGuest;
    
    // console.log(guestArr)
    
    guestArr1.map((items) =>
    console.log(`Dear ${items}, you are invited to the dinner`)
    )

    
 