// Q1. Double using callback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.


function doubleArray(arr, callback) {
    const doubledArr = arr.map((num) => {
        return callback(num);
    });
    return doubledArr;

}
const orignalArray = [1, 2, 3, 4];
function callback(num) {
    return num*2;
}
const doubledArray = doubleArray(orignalArray, callback);
console.log(doubledArray);


// Q2. String Manipulation.
// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function "logString" that logs the sentence "The manipulated string is: " along
// with the manipulated string or the new string to the console.



function manipulateString(inputString, callback) {
    const manipulatedString = inputString.toUpperCase();
    callback(manipulatedString);
}
function logString(manipulatedString) {
    console.log(`The manipulated string is: ${manipulatedString}`);
}


// 3. Age in Days.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
// name, and age in years as input. The function should concatenate the first and last name into a single string
// and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
// variable called ageInDays.
// The ageInDays function should then return a callback function that logs a message to the console. The
// message should include the person's full name and age in days, and should be in the format: "The person's full
// name is [full name] and their age in days is [age in days]."
// Note that the ageInDays function should not log the message to the console directly, but should instead return
// a callback function that can be used to log the message at a later time.



const person = {
    firstName: "Mithun",
    lastName: "Pandey",
    age: 20,
};

function ageInDays(personObject, callback) {
    const fullName = `${personObject.firstName} ${personObject.lastName}`;
    const ageInDays = personObject.age * 365;
    callback(fullName, ageInDays); 
}
function logResult(fullName, ageInDays){
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}`);
}



// 4. Arrange in alphabetical order.Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.


const books = [
    {
        title: "The Moon",
        author: "Dr. Nayan",
        year: 2000,
    },
    {
        title: "The Sun",
        author: "Dr. Kripa",
        year: 2021,
    },
    {
        title: "Dangerous Fight",
        author: "Dr. Subhash",
        year: 2023,
    },
];
function logTitles(titles) {
    titles.sort();
    console.log(titles.join(", "));
}
function extractTitles(books, callback) {
const titles = books.map((book) => book.title);
callback(titles);
}
extractTitles(books, logTitles);


// 5. Greeting Promise.You need to write a function that takes a name as input and returns a promise that resolves with a greeting
// message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
// For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".


function greet(name) {
    return new Promise((resolve) => {
        const greeting = `Hello, ${name}!`;
        resolve(greeting)
    });
}
greet("SUBHASH").then((message) => console.log(message));


// 6. Fetch results asynchronously.Write a function that asynchronously fetches data from an API
// [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.


async function fetchData() {
    const response = await
    fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
}
fetchData();